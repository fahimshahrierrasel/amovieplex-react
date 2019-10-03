import React from "react";
import PropTypes from "prop-types";
import "./carousel.scss";

function Carousel({ image, title }) {
  return (
    <div className="carousel">
      <div className="overlay">
        <div className="content">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti a
            distinctio dolorum laborum et beatae accusantium cum quasi,
            reprehenderit quaerat incidunt minima animi veniam laboriosam
            laudantium eveniet. Veniam, voluptas. Ullam!
          </p>
        </div>
        <div className="btn btn--animated">Play Trailer</div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}

Carousel.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Carousel;
