import React from "react";

const DesktopMenu = () => {
  return (
    <>
      <div className="header__menu">
        <div className="btns-container">
          <button className="btn header__btn">Features</button>
          <button className="btn header__btn">Pricing</button>
          <button className="btn header__btn">Resources</button>
        </div>
        <div className="btns-container">
          <button className="btn header__btn">Login</button>
          <button className="btn btn--highlighted btn--wide">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
