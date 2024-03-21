import React from 'react';

const FeatureBox = ({ iconClass, heading, text, boxClass }) => {
  return (
    <div className={`box ${boxClass}`}>
      <i className={`fas ${iconClass} fa-2x text-red`} aria-hidden="true"></i>
      <h2 className="md-heading">{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
