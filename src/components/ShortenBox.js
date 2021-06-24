import React from "react";

const ShortenBox = () => {
  return (
    <>
      <div className="shorten-box">
        <input className="shorten-box__input" placeholder="Shorten a link here..." />
        <button className="shorten-box__btn">Shorten It!</button>
      </div>
    </>
  );
};

export default ShortenBox;
