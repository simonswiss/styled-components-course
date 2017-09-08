import React from "react";
import ItemAdder from "../ItemAdder";

const Rewards = props => (
  <div>
    <h4 className="heading">Rewards:</h4>
    <ul className="list-items">
      {props.rewards.map((reward, index) => <Reward key={index} {...reward} />)}
    </ul>

    <ItemAdder
      subheading="Add Reward"
      nameLabel="Reward name"
      pointsLabel="Points needed"
      buttonText="Add reward"
      type="reward"
      handleNewItem={props.handleNewItem}
    />
  </div>
);

const Reward = props => (
  <li className="list-item">
    <button
      className="list-button"
      onClick={() => props.handleTaskClick(props.index)}
    >
      <div className="list-button__name">{props.name}</div>
      <div className="list-button__points">{props.points}</div>
    </button>
  </li>
);

export default Rewards;
