import React from 'react';

const Description = ({property, handleClick}) => {
  return (
    <React.Fragment>
      <div className="description-container">
        <h3 id='brief'>
          {property.brief}
        </h3>
        <div className="description-box">
          <p id="description">
            {property.description}
          </p>
          <p className="view-more-less"><a className="view-more" onClick={handleClick}>
            View more
          </a></p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
