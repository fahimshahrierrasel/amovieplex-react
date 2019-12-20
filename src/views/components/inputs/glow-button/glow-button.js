import React from "react";
import "./glow-button.scss";

const GlowButton = ({ text, className, onClick, loading }) => {
  return (
    <button
      className={`glow-button ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <div className="tracking-in-expand" style={{ height: "20px" }}>
          Loading...
        </div>
      ) : (
        <div>{text}</div>
      )}
    </button>
  );
};

export default GlowButton;
