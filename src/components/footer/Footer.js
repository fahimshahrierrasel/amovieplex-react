import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--body">
        <div className="footer--body__left">
          <h1>A Movie Plex</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            eius, sed sint voluptatum iure quo ut obcaecati nobis atque dolores
            laudantium distinctio rerum sapiente quisquam illum! Officiis
            aliquid animi similique.
          </p>
        </div>
        <div className="footer--body__right">
          <ul>
            <li>
              <Link to="/">Link 1</Link>
            </li>
            <li>
              <Link to="/">Link 2</Link>
            </li>
            <li>
              <Link to="/">Link 3</Link>
            </li>
            <li>
              <Link to="/">Link 4</Link>
            </li>
          </ul>
          <ul>
            <ul>
              <li>
                <Link to="/">Link 1</Link>
              </li>
              <li>
                <Link to="/">Link 2</Link>
              </li>
              <li>
                <Link to="/">Link 3</Link>
              </li>
              <li>
                <Link to="/">Link 4</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="footer--footer">
        ©{new Date().getFullYear()} A Movie Plex
      </div>
    </div>
  );
}

export default Footer;
