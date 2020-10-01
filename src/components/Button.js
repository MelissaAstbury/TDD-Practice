import React from "react";

import "./Button.css";

const Button = (props) => (
  <button className="location-btn">
    {props.location ? props.location : "All Locations"}
  </button>
);

export default Button;
