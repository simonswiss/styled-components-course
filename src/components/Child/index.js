import React from "react";
import { Link } from "react-router-dom";
import ChildSummary from "../ChildSummary";
import Tasks from "../Tasks";
import Rewards from "../Rewards";
import Stats from "../ui/Stats";

import "./styles.css";

const ChildInfo = props => (
  <header className="child-info">
    <Link to="/" className="breadcrumb">
      &larr; Home
    </Link>
    <h2 className="child-info__name">{props.name}</h2>
    <Stats
      className="child-info__stats"
      stats={[{ label: "total points", value: props.points }]}
    />
    <div className="child-info__controls">
      <button
        className="button button--inline"
        onClick={() => props.resetChild(props.id)}
      >
        Reset
      </button>
      <button
        className="button button--danger"
        onClick={() => props.deleteChild(props.id)}
      >
        Delete
      </button>
    </div>
  </header>
);

const Child = props => (
  <div className="child">
    <ChildInfo
      id={props.id}
      name={props.name}
      points={props.points}
      resetChild={props.resetChild}
      deleteChild={props.deleteChild}
    />

    <div className="column-wrapper">
      <Tasks
        tasks={props.tasks}
        handleNewItem={props.handleNewItem}
        childId={props.id}
        achieveTask={props.achieveTask}
      />
      <Rewards
        rewards={props.rewards}
        handleNewItem={props.handleNewItem}
        childId={props.id}
        points={props.points}
        unlockReward={props.unlockReward}
      />
    </div>
  </div>
);

export default Child;
