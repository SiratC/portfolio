import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LatestPost.css';
import avatarUrl from '../assets/avatar.jpg';

const LatestPost = () => {
  const [latestTweet, setLatestTweet] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserId = async (username) => {
    try {
      const response = await axios.get(`/api/twitter/user/${username.trim()}`);
      return response.data.data?.id || null;
    } catch {
      setError('Unable to fetch X userID.');
      return null;
    }
  };

  const fetchLatestTweet = async (userId) => {
    try {
      const response = await axios.get(`/api/twitter/tweets/${userId}`);
      const { data, includes } = response.data;
      if (data?.length) {
        const tweet = data[0];
        setLatestTweet(tweet);
        if (tweet.attachments?.media_keys && includes?.media) {
          const key = tweet.attachments.media_keys[0];
          const media = includes.media.find((m) => m.media_key === key);
          if (media?.url) setMediaUrl(media.url);
        }
      } else {
        setError('No tweets found.');
      }
    } catch (err) {
      if (err.response?.status === 429) {
        const reset = err.response.data.reset;
        setError(
          `Rate limit exceeded. Try after ${new Date(
            reset * 1000
          ).toLocaleTimeString()}.`
        );
      } else {
        setError('Error fetching the latest tweet.');
      }
    }
  };

  useEffect(() => {
    (async () => {
      const userId = await fetchUserId('itsSirat');
      if (userId) await fetchLatestTweet(userId);
    })();
  }, []);
  const profileUrl = 'https://x.com/ItsSirat';

  return (
    <div className="latest-post-h2">
  <h2>Currently Working On...</h2>
  <a
    href="https://x.com/ItsSirat"
    target="_blank"
    rel="noopener noreferrer"
    className="latest-post-container"
  >
      <div className="user-header">
      <img src={avatarUrl} alt="ItsMeSirat" className="user-avatar" />
          <span className="user-name">ItsMeSirat</span>
        </div>
        
    {error ? (
      <p className="error">{error}</p>
    ) : latestTweet ? (
      <>
        <p>{latestTweet.text}</p>
        <p className="tweet-date">
          Posted at: {new Date(latestTweet.created_at).toLocaleString()}
        </p>
        {mediaUrl && (
          <img
            src={mediaUrl}
            alt="Tweet media"
            className="latest-post-image"
          />
        )}
      </>
    ) : (
      <p>Loading tweet...</p>
    )}
  </a>
</div>

  );
};

export default LatestPost;
