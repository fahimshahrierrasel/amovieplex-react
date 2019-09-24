import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const CarouselCard = ({ image }) => (
  <div
    className="card__carousel"
    style={{
      backgroundImage: `url(${image})`
    }}
  >
    {/* <img src={image} alt="" /> */}
    <h1>
      <Link to="/">Hello</Link>
    </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
);

CarouselCard.protoTypes = {
  image: PropTypes.string.isRequired
};

export default CarouselCard;
