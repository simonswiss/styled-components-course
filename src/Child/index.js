import React from "react";
import Tasks from "../Tasks";
import Rewards from "../Rewards";

const Child = props => (
  <div className="child">
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

    <button
      className="reset reset-gray"
      onClick={() => props.resetChild(props.id)}
    >
      Reset
    </button>

    <Rewards
      rewards={props.rewards}
      handleNewItem={props.handleNewItem}
      childId={props.id}
      points={props.points}
      unlockReward={props.unlockReward}
    />

    <Tasks
      tasks={props.tasks}
      handleNewItem={props.handleNewItem}
      childId={props.id}
      achieveTask={props.achieveTask}
    />
  </div>
);

export default Child;
