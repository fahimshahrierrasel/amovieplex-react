import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <nav>
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
    </nav>
  );
}

export default Header;
