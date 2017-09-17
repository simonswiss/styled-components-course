import React from "react";
import { Link } from "react-router-dom";
import ChildSummary from "../ChildSummary";
import Tasks from "../Tasks";
import Rewards from "../Rewards";

const Child = props => (
  <div className="child">
    <Link to="/" className="breadcrumb">
      &larr; back
    </Link>

    <div className="column-wrapper">
      <div className="child-summary">
        <ChildSummary
          name={props.name}
          points={props.points}
          id={props.id}
          deleteChild={props.deleteChild}
        />

        <button
          className="reset reset-gray"
          onClick={() => props.resetChild(props.id)}
        >
          Reset
        </button>
      </div>

      <div className="child-fields">
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
    </div>
  </div>
);

export default Child;
