require('dotenv').config();
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = express();
const port = 4001;

// cache tweets per user ID for 60 seconds
const tweetCache = new NodeCache({ stdTTL: 60 });

const bearerToken = decodeURIComponent(process.env.TWITTER_BEARER_TOKEN);
console.log("Loaded Bearer Token:", bearerToken);

// health check debugging tester
// app.get('/health', (req, res) => {
//   res.send('Proxy server is up!!!!');
// });

// user lookup with profile image and name
app.get('/api/twitter/user/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const url =
      `https://api.twitter.com/2/users/by/username/${username}` +
      `?user.fields=name,profile_image_url`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    res.json(response.data);
  } catch (err) {
    console.error(
      'Error fetching user data –',
      err.response ? err.response.data : err.message
    );
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// tweets with media and caching
app.get('/api/twitter/tweets/:userId', async (req, res) => {
  const userId = req.params.userId;
  const cacheKey = `tweets_${userId}`;

  // return cached data if available
  const cached = tweetCache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    const url =
      `https://api.twitter.com/2/users/${userId}/tweets` +
      `?max_results=5` +
      `&tweet.fields=created_at,attachments` +
      `&expansions=attachments.media_keys` +
      `&media.fields=url`;

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });

    // cache the response body
    tweetCache.set(cacheKey, response.data);

    return res.json(response.data);
  } catch (err) {
    // handle rate limit specifically
    if (err.response?.status === 429) {
      const resetTime = err.response.headers['x-rate-limit-reset'];
      const resetDate = resetTime ? new Date(resetTime * 1000) : null;
      console.error('Rate limit hit. Reset at this time:', resetTime);
      return res.status(429).json({
        error: 'Rate limit exceeded',
        reset_time: resetTime,
        reset_at: resetDate ? resetDate.toISOString() : null,
      });
    }
    console.error(
      'Error fetching tweets –',
      err.response ? err.response.data : err.message
    );
    return res.status(err.response?.status || 500).json({ error: err.message });
  }
});

app.listen(port, '0.0.0.0', () => console.log(`Proxy server running on port ${port}`));
