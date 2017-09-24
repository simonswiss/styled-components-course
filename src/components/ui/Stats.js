import React from "react";
import "./styles.css";

export default props => (
  <ul className="stat-blocks">
    {props.stats.map((stat, i) => (
      <li key={i} className="stat-block">
        <small className="stat-block__label">{stat.label}</small>
        <h3 className="stat-block__value">{stat.value}</h3>
      </li>
    ))}
  </ul>
);
