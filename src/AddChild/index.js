import React from "react";

export default props => (
  <button
    className={props.isAdding ? "add-child-button open" : "add-child-button"}
    onClick={props.toggleForm}
  >
    <svg
      className="add-child-icon"
      viewBox="0 0 5 5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="wihte" d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
    </svg>
  </button>
);
