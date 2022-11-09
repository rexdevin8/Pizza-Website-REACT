import React from "react";
import "../styles/Home.css";
import HomeImg from "../assets/pizza.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
      <div
        className="sub-container"
        style={{
          backgroundImage: `url("${HomeImg}")`,
        }}
      >
        <h1>Pedro's Pizza Hut</h1>
        <p>Taste Your Dream Pizza</p>
      </div>
      <div id='order-now'><Link to='/menu'>Order Now !!</Link></div>
    </div>
  );
}

export default Home;
