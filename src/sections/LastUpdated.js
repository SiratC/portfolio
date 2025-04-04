import React from 'react';

const LastUpdated = () => {
  
  const buildDate = process.env.REACT_APP_BUILD_DATE;

  return (
    <p id="update">
      Site last updated {buildDate ? buildDate : "Date not set"}
    </p>
  );
};

export default LastUpdated;
