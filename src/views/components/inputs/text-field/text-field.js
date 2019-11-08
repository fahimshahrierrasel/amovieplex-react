import React from "react";
import "./text-field.scss";

const TextField = ({ title, type, value, onChange, className }) => {
  return (
    <div className={`form-field ${className}`}>
      <input
        type={type}
        id={title.toLowerCase()}
        name={title.toLowerCase()}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label htmlFor={title.toLowerCase()} className="form-field__label">
        {title}
      </label>
    </div>
  );
};

export default TextField;
