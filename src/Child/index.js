import React from "react";
import Tasks from "../Tasks";
import Rewards from "../Rewards";

const Child = props => (
  <div className="child">
    <small>Name</small>
    <h2>{props.name}</h2>
    <p>
      <span className="total-points">{props.points}</span> poins
    </p>
    <Tasks
      tasks={props.tasks}
      handleNewTask={props.handleNewTask}
      checkTask={props.checkTask}
    />
    <Rewards rewards={props.rewards} />
  </div>
);

export default Child;
