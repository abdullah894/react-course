import React from 'react';
const ShowcaseItem = ({ image, heading, text, link }) => {
  const imageSrc = `../img/${image}`; 

  return (
    <div className="row row1">
      <div className="img-box">
        <img src={imageSrc} alt="Image Description" />
      </div>
      <div className="text-box">
        <h2 className="lg-heading text-black">{heading}</h2>
        <p className="text-gray">{text}</p>
        <a href={link} className="btn btn-secondary">
          More
        </a>
      </div>
    </div>
  );
};

export default ShowcaseItem;
