import React from "react";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ isOpen, setOpen }) => {
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} color="hsl(257, 7%, 63%)" />
      {isOpen ? (
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
      ) : null}
    </>
  );
};

export default HamburgerMenu;
