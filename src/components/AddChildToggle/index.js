import React from "react";
import "./styles.css";

export default props => (
  <button
    className={props.isAdding ? "add-child-toggle open" : "add-child-toggle"}
    onClick={props.toggleForm}
  >
    <svg
      className="add-child-toggle__icon"
      viewBox="0 0 5 5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="wihte" d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
    </svg>
  </button>
);
