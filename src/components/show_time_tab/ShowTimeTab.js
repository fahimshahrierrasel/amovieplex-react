import React, { Component } from "react";
import "./style.scss";
import MovieListCard from "../movie_list_card/MovieListCard";

class ShowTimeTab extends Component {
  state = {
    selectedDate: "Today",
    showDates: [
      "Today",
      "25/09/2019",
      "26/09/2019",
      "27/09/2019",
      "28/09/2019",
      "29/09/2019",
      "30/09/2019"
    ],
    movies: [
      { date: "Today", title: "Today's Movie 1" },
      { date: "Today", title: "Today's Movie 2" },
      { date: "Today", title: "Today's Movie 3" },
      { date: "Today", title: "Today's Movie 4" },
      { date: "25/09/2019", title: "25/09/2019's Movie 1" },
      { date: "25/09/2019", title: "25/09/2019's Movie 2" },
      { date: "26/09/2019", title: "26/09/2019's Movie 1" },
      { date: "26/09/2019", title: "26/09/2019's Movie 2" },
      { date: "26/09/2019", title: "26/09/2019's Movie 3" },
      { date: "26/09/2019", title: "26/09/2019's Movie 4" },
      { date: "27/09/2019", title: "27/09/2019's Movie 1" },
      { date: "27/09/2019", title: "27/09/2019's Movie 2" },
      { date: "27/09/2019", title: "27/09/2019's Movie 3" },
      { date: "28/09/2019", title: "28/09/2019's Movie 1" },
      { date: "28/09/2019", title: "28/09/2019's Movie 2" }
    ],
    seletedMovie: []
  };
  changeTab(date) {
    this.setState({
      selectedDate: date,
      seletedMovie: this.state.movies.filter(movie => movie.date === date)
    });
  }
  componentDidMount() {
    this.setState({
      seletedMovie: this.state.movies.filter(
        movie => movie.date === this.state.selectedDate
      )
    });
  }
  render() {
    return (
      <div>
        <div className="tab--header">
          {this.state.showDates.map(date => (
            <span
              role="button"
              className={
                "tab--item " +
                (this.state.selectedDate === date ? "selected" : "")
              }
              key={date}
              onClick={() => {
                this.changeTab(date);
              }}
              onKeyDown={() => {
                this.changeTab(date);
              }}
              tabIndex={date}
            >
              {date}
            </span>
          ))}
        </div>
        <div className="tab--details">
          {this.state.seletedMovie.map(movie => (
            <MovieListCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default ShowTimeTab;
