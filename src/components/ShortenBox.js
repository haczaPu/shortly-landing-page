import React from "react";

const ShortenBox = ({ getData, input, handleInput }) => {
  return (
    <>
      <div className="shorten-box">
        <input
          className="shorten-box__input"
          placeholder="Shorten a link here..."
          value={input}
          onChange={handleInput}
        />
        <button className="shorten-box__btn" onClick={getData}>
          Shorten It!
        </button>
      </div>
    </>
  );
};

export default ShortenBox;
