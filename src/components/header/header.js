import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <nav>
      <div className="container">
        <h1>
          <Link to="/">A Movie Plex</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Header;
