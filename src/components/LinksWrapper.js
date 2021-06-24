import React from "react";

const LinksWrapper = () => {
  return (
    <>
      <div className="links-wrapper">
        <div className="result">
          <div className="result__link">https://frontendmenor.io</div>
          <div className="result__container">
            <div className="result__link result__link--shorten">https://frfdssr.io</div>
            <button className="btn btn--highlighted">Copy</button>
          </div>
        </div>
        <div className="result">
          <div className="result__link">https://frontendmenor.io</div>
          <div className="result__container">
            <div className="result__link result__link--shorten">https://frfdssr.io</div>
            <button className="btn btn--highlighted">Copy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksWrapper;
