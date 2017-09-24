import React from "react";
import ItemAdder from "../ItemAdder";

import Stats from "../ui/Stats";

const Rewards = props => (
  <div className="column">
    <h2 className="column-heading">Rewards</h2>
    <ul className="list-items">
      {props.rewards.map((reward, index) => (
        <Reward
          key={index}
          index={index}
          {...reward}
          totalPoints={props.points}
          childId={props.childId}
          unlockReward={props.unlockReward}
        />
      ))}
    </ul>

    <ItemAdder
      subheading="Add Reward"
      nameLabel="Reward name"
      pointsLabel="Points"
      buttonText="Add reward"
      type="reward"
      childId={props.childId}
      handleNewItem={props.handleNewItem}
    />
  </div>
);

const Reward = props => (
  <li className="list-item">
    <h2 className="item-headline">{props.name}</h2>
    <div className="list-item--inline">
      <button
        className="button button--primary button--inline"
        onClick={() => props.unlockReward(props.childId, props.index)}
        disabled={props.totalPoints < props.points}
      >
        Unlock this!
      </button>

      <Stats
        stats={[
          {
            label: "points needed",
            value: props.points
          },
          {
            label: "times unlocked",
            value: props.count
          }
        ]}
      />
    </div>

    <div className="progress">
      <div className="progress__line" />
      <div
        className="progress__mask"
        style={{ width: `${(1 - props.totalPoints / props.points) * 100}%` }}
      />
    </div>
  </li>
);

export default Rewards;
