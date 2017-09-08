import React from "react";
import Tasks from "../Tasks";
import Rewards from "../Rewards";

const Child = props => (
  <div className="child">
    <header className="summary">
      <h2>{props.name}</h2>
      <div className="points">
        <div>
          <span className="total-points">{props.points}</span> poins
        </div>
      </div>
    </header>

    <button className="reset" onClick={props.resetChild}>
      Reset
    </button>

    <Rewards rewards={props.rewards} handleNewItem={props.handleNewItem} />

    <Tasks
      tasks={props.tasks}
      handleNewItem={props.handleNewItem}
      checkTask={props.checkTask}
    />
  </div>
);

export default Child;
