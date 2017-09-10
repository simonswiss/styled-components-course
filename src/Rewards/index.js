import React from "react";
import ItemAdder from "../ItemAdder";

const Rewards = props => (
  <div>
    <h4 className="heading">Rewards:</h4>
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
    <button
      disabled={props.totalPoints < props.points}
      className="list-button"
      onClick={() => props.unlockReward(props.childId, props.index)}
    >
      <div className="list-button__name">{props.name}</div>
      {props.count > 0 && (
        <div className="list-button__counter">
          unlocked {props.count} {props.count > 1 ? " times" : " time"}!
        </div>
      )}

      <div className="list-button__points">{props.points}</div>
      <span
        className="list-button__progress"
        style={{
          width: `${props.totalPoints / props.points * 100}%`,
          backgroundColor:
            props.totalPoints < props.points ? "tomato" : "#07ffcc"
        }}
      />
    </button>
  </li>
);

export default Rewards;
