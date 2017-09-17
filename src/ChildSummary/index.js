import React from "react";

export default props => (
  <div>
    <h4 className="heading">Profile:</h4>
    <header className="summary">
      <h2 className="summary-name">{props.name}</h2>
      <div className="points">
        <div>
          <span className="total-points">{props.points}</span> poins
        </div>
      </div>
      <button
        className="delete-child reset"
        onClick={() => props.deleteChild(props.id)}
      >
        Delete
      </button>
    </header>
  </div>
);
