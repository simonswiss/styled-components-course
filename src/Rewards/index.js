import React from "react";

const Rewards = props => (
  <div>
    <h4>Rewards:</h4>
    <ul>
      {props.rewards.map((reward, index) => <Reward key={index} {...reward} />)}
    </ul>
  </div>
);

const Reward = props => (
  <li>
    {props.name} ({props.points})
  </li>
);

export default Rewards;
