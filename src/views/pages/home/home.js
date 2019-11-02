import React, { Component } from "react";
import "./home.scss";
import Carousel from "../../components/carousel";
import ShowTimeTab from "../../components/show-time-tab";
import ContactInfo from "../../components/contact-info";
import MovieCardCarousel from "../../components/movie-card-carousel";

class Home extends Component {
  state = {
    movies: [
      {
        title: "My Movie 1",
        image: "https://picsum.photos/seed/1/200/300"
      },
      {
        title: "My Movie 2",
        image: "https://picsum.photos/seed/2/200/300"
      },
      {
        title: "My Movie 3",
        image: "https://picsum.photos/seed/3/200/300"
      },
      {
        title: "My Movie 4",
        image: "https://picsum.photos/seed/4/200/300"
      },
      {
        title: "My Movie 5",
        image: "https://picsum.photos/seed/5/200/300"
      },
      {
        title: "My Movie 6",
        image: "https://picsum.photos/seed/6/200/300"
      },
      {
        title: "My Movie 7",
        image: "https://picsum.photos/seed/7/200/300"
      },
      {
        title: "My Movie 8",
        image: "https://picsum.photos/seed/8/200/300"
      },
      {
        title: "My Movie 9",
        image: "https://picsum.photos/seed/9/200/300"
      },
      {
        title: "My Movie 10",
        image: "https://picsum.photos/seed/10/200/300"
      },
      {
        title: "My Movie 11",
        image: "https://picsum.photos/seed/11/200/300"
      },
      {
        title: "My Movie 12",
        image: "https://picsum.photos/seed/12/200/300"
      }
    ]
  };

  render() {
    return (
      <div className="home__container">
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
        <MovieCardCarousel movies={this.state.movies} />
        <ShowTimeTab />
        <ContactInfo />
      </div>
    );
  }
}

export default Home;
