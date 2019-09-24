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
      {
        date: "Today",
        title: "Today's Movie 1",
        image: "https://picsum.photos/seed/1/200/300"
      },
      {
        date: "Today",
        title: "Today's Movie 2",
        image: "https://picsum.photos/seed/2/200/300"
      },
      {
        date: "Today",
        title: "Today's Movie 3",
        image: "https://picsum.photos/seed/3/200/300"
      },
      {
        date: "Today",
        title: "Today's Movie 4",
        image: "https://picsum.photos/seed/4/200/300"
      },
      {
        date: "25/09/2019",
        title: "25/09/2019's Movie 1",
        image: "https://picsum.photos/seed/5/200/300"
      },
      {
        date: "25/09/2019",
        title: "25/09/2019's Movie 2",
        image: "https://picsum.photos/seed/6/200/300"
      },
      {
        date: "26/09/2019",
        title: "26/09/2019's Movie 1",
        image: "https://picsum.photos/seed/7/200/300"
      },
      {
        date: "26/09/2019",
        title: "26/09/2019's Movie 2",
        image: "https://picsum.photos/seed/8/200/300"
      },
      {
        date: "26/09/2019",
        title: "26/09/2019's Movie 3",
        image: "https://picsum.photos/seed/9/200/300"
      },
      {
        date: "26/09/2019",
        title: "26/09/2019's Movie 4",
        image: "https://picsum.photos/seed/10/200/300"
      },
      {
        date: "27/09/2019",
        title: "27/09/2019's Movie 1",
        image: "https://picsum.photos/seed/11/200/300"
      },
      {
        date: "27/09/2019",
        title: "27/09/2019's Movie 2",
        image: "https://picsum.photos/seed/12/200/300"
      },
      {
        date: "27/09/2019",
        title: "27/09/2019's Movie 3",
        image: "https://picsum.photos/seed/13/200/300"
      },
      {
        date: "28/09/2019",
        title: "28/09/2019's Movie 1",
        image: "https://picsum.photos/seed/14/200/300"
      },
      {
        date: "28/09/2019",
        title: "28/09/2019's Movie 2",
        image: "https://picsum.photos/seed/15/200/300"
      }
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
      <div className="tab">
        <div className="tab--header">
          {this.state.showDates.map(date => (
            <a
              href={`#${date}`}
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
            </a>
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
