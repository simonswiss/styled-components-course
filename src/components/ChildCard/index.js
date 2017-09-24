import React from "react";

export default props => (
  <div className="child-card">
    <header>
      <h2>{props.name}</h2>
      <div className="child-card-points">
        <span className="points-label">points</span>
        <h2>{props.points}</h2>
      </div>
    </header>
    <ul className="child-card-stats">
      <li className="stats-tasks">
        <strong>{props.tasksCount}</strong> chore{props.tasksCount !== 1 && "s"}{" "}
      </li>
      <li className="stats-rewards">
        <strong>{props.rewardsCount}</strong> reward{props.rewardsCount !== 1 && "s"}
      </li>
    </ul>

    <div className="child-card-achievements">
      <strong>{props.achievements}</strong> goal{props.achievements !== 1 && "s"}{" "}
      unlocked
    </div>
    <button
      className="child-card-delete"
      onClick={() => props.deleteChild(props.id)}
    >
      &times;
    </button>
  </div>
);
