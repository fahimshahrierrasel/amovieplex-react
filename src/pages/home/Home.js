import React, { Component } from "react";
import "./style.scss";
import Carousel from "../../components/carousel/Carousel";
import CarouselCard from "../../components/carousel_card/CarouselCard";

class Home extends Component {
  state = {
    movieCards: [
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' },
      { image: '"https://picsum.photos/seed/picsum/200/300' }
    ]
  };

  render() {
    return (
      <div>
        <div className="hero">
          <div className="carousel__list">
            <Carousel
              image="https://picsum.photos/800/600"
              title="My First Movie"
            />
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
        <div className="card__carousel__list">
          {this.state.movieCards.map(card => (
            <CarouselCard image="https://picsum.photos/seed/picsum/200/300" />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
