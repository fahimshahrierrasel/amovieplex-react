import React, { Component } from "react";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="carousel">
            <img src="https://picsum.photos/800/600" alt="hero" />
            <h2>My First Movie</h2>
          </div>
          <div className="sidebar">
            <span>Now Playing</span>
            <div className="sidebar__card">
              <h4>My First Movie</h4>
              <p>Remaining: 01:20 minutes</p>
            </div>
            <span>Coming Up Next</span>
            <div className="sidebar__card">
              <h4>My First Movie</h4>
              <p>Genre: Action, Adventure, Drama</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
