import React, { Component } from "react";
import "./style.scss";

class MovieDetails extends Component {
  state = {
    showTimes: [
      {
        day: "Friday",
        times: ["11:00AM", "01:10PM", "03:30PM", "05:10PM", "07:20PM"]
      },
      {
        day: "Saturday",
        times: ["11:00AM", "01:10PM", "03:30PM", "05:10PM", "07:20PM"]
      },
      {
        day: "Sunday",
        times: ["11:00AM", "01:10PM", "03:30PM"]
      },
      {
        day: "Monday",
        times: ["05:10PM", "07:20PM"]
      },
      {
        day: "Tuesday",
        times: ["01:10PM", "03:30PM", "05:10PM"]
      },
      {
        day: "Wednesday",
        times: ["11:00AM", "03:30PM", "07:20PM"]
      },
      {
        day: "Thursday",
        times: ["05:10PM", "07:20PM", "08:50PM"]
      }
    ],
    selectedImage: "1"
  };
  render() {
    return (
      <div>
        <div
          className="movie--hero"
          style={{ backgroundImage: `url(https://picsum.photos/1920/400)` }}
        >
          <h3>Movie Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa
            libero vero, illo odio repellat, natus amet accusantium dolore
            voluptate nisi deleniti possimus ea doloremque cum cumque maxime
            sapiente deserunt.
          </p>
        </div>
        <div className="movie--desc">
          <div className="synopsis">
            <h1>Synopsis</h1>
            <div className="poster">
              <img src="https://picsum.photos/seed/1/200/300" alt="" />
            </div>
            <div className="plot">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              harum inventore ipsam non? Dolorem vero suscipit reprehenderit
              esse iure, ratione assumenda et consectetur, illo amet minus
              atque. Eius, autem qui?
              <div className="info">
                <div className="info__item">
                  <span className="title">Director</span>
                  <span className="name">Name 1</span>
                </div>
                <div className="info__item">
                  <span className="title">Starring</span>
                  <span className="name">
                    Name 1, Name 2, Name 3, Name 4, Name 5
                  </span>
                </div>
                <div className="info__item">
                  <span className="title">Release Date</span>
                  <span className="name">23 June 2019</span>
                </div>
                <div className="info__item">
                  <span className="title">Running Time</span>
                  <span className="name">120 Mins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="movie--show-time">
            <h1>Show Times</h1>
            {this.state.showTimes.map(showTime => (
              <div className="show-time" key={showTime.day}>
                <span className="show-time__day">{showTime.day}</span>
                <ul>
                  {showTime.times.map(time => (
                    <li key={showTime.day + time}>{time}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="movie--preview">
          <img
            className="image__preview"
            src={`https://picsum.photos/seed/${this.state.selectedImage}/800/600`}
            alt=""
          />
          <div className="movie__preview--list">
            {this.state.showTimes.map(showTime =>
              showTime.times.map(time => (
                <img
                  role="presentation"
                  className="preview__card"
                  key={showTime.day + time}
                  src={`https://picsum.photos/seed/${showTime.day +
                    time}/200/300`}
                  alt=""
                  onClick={() => {
                    this.setState({
                      selectedImage: `${showTime.day + time}`
                    });
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
