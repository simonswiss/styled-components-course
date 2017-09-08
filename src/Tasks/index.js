import React from "react";
import ItemAdder from "../ItemAdder";
export default props => (
  <div>
    <h2 className="heading">Tasks</h2>
    <ul className="list-items">
      {props.tasks.map((task, index) => (
        <Task
          index={index}
          key={index}
          {...task}
          checkTask={index => props.checkTask(index)}
        />
      ))}
    </ul>

    <ItemAdder
      subheading="Add task"
      nameLabel="Task name"
      pointsLabel="Points"
      buttonText="Add task"
      type="task"
      handleNewItem={props.handleNewItem}
    />
  </div>
);

const Task = props => (
  <li className="list-item">
    <button
      className="list-button"
      onClick={() => props.checkTask(props.index)}
    >
      <div className="list-button__name">{props.name}</div>
      <div className="list-button__counter">done {props.count} times</div>
      <div className="list-button__points">{props.points}</div>
    </button>
  </li>
);
