import React from "react";
import "./style.scss";

function MovieListCard({ movie }) {
  return (
    <div className="movie--list__card">
      <div
        className="movie--list__card__image"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/picsum/150/200)`
        }}
      >
        <img src="https://picsum.photos/seed/picsum/150/200" alt="" />
      </div>
      <div className="movie--list__card__details">
        <h1>{movie.title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos optio
          sint voluptatibus ipsa, neque minus similique velit nemo vitae illo at
          deserunt voluptatum enim, laboriosam ab. Nesciunt, doloribus ea!
          Minima.
        </p>
      </div>
    </div>
  );
}

export default MovieListCard;
