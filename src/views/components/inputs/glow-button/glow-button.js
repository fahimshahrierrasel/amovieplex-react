import React from "react";
import "./glow-button.scss";

const GlowButton = ({ text, className, onClick }) => {
  return (
    <button className={`glow-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlowButton;
