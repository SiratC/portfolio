import React from 'react';

const TechIcon = ({ iconName, iconLabel, color }) => {
  // Remove the '#' if it's included and convert the iconName to lowercase
  const processedColor = color.startsWith('#') ? color.slice(1) : color;
  const url = `https://cdn.simpleicons.org/${iconName.toLowerCase()}/${processedColor}`;

  return (
    <div className="tech-item">
      <img
        src={url}
        alt={`${iconLabel} Icon`}
        style={{ width: '60px', height: '60px' }}
      />
      <div className="name">{iconLabel}</div>
    </div>
  );
};

export default TechIcon;
