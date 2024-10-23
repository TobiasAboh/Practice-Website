import { useState } from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* <div > */}
      <p className="logo">V</p>
      {/* </div> */}
      <nav className="navlinks">
        <button className="navlink home">Home</button>
        <button className="navlink services">Services</button>
        <button className="navlink support">Support</button>
      </nav>
      <button
        style={{
          border: "none",
          width: "150px",
          height: "40px",
          borderRadius: "50px",
          fontSize: "17px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        Book now
      </button>
    </div>
  );
};

export default NavBar;
