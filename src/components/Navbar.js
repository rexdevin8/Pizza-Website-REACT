import React, { useState } from "react";
import logo from "../assets/pizzaLogo.png";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hidden-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="burger-btn" onClick={toggleNavbar}>
          <ReorderIcon sx={{ fontSize: "40px" }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
