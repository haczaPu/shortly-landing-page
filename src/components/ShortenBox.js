import React from "react";

const ShortenBox = ({ getData, input, handleInput, errorMessage }) => {
  return (
    <>
      <div className="shorten-box">
        <input
          className="shorten-box__input"
          placeholder="Shorten a link here..."
          value={input}
          type="text"
          onChange={handleInput}
          style={{ boxShadow: errorMessage ? "0 0 0px 3px rgb( 255,100, 100)" : null }}
        />
        {errorMessage && <p className="err-message">{errorMessage}</p>}
        <button className="shorten-box__btn" onClick={getData}>
          Shorten It!
        </button>
      </div>
    </>
  );
};

export default ShortenBox;
