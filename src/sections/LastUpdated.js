import React from 'react';

const LastUpdated = () => {
  const buildDate = process.env.REACT_APP_BUILD_DATE || new Date().toISOString().slice(0, 10);
  return <p id ="update">Site last updated {buildDate}</p>;
};

export default LastUpdated;
