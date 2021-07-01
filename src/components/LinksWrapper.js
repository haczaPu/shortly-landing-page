import React from "react";
import ReactLoading from "react-loading";

const LinksWrapper = ({ loading, results, handleCopy }) => {
  return (
    <>
      {loading ? (
        <ReactLoading type={"bubbles"} color={"hsl(180, 66%, 49%)"} width={"120px"} height={"120px"} />
      ) : (
        <div></div>
      )}
      {results.map((link, i) => (
        <div className="links-wrapper" key={i}>
          <div className="result">
            <div className="result__link">{link.original_link}</div>
            <div className="result__container">
              <div className="result__link result__link--shorten">{link.short_link}</div>
              <button className="btn btn--highlighted btn--squared" onClick={handleCopy}>
                Copy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinksWrapper;
