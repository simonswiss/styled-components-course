import React from "react";
import ItemAdder from "../ItemAdder";
export default props => (
  <div>
    <h2 className="heading">Tasks</h2>
    <ul className="list-items">
      {props.tasks.map((task, index) => {
        return (
          <Task
            index={index}
            key={index}
            {...task}
            childId={props.childId}
            achieveTask={props.achieveTask}
          />
        );
      })}
    </ul>

    <ItemAdder
      subheading="Add task"
      nameLabel="Task name"
      pointsLabel="Points"
      buttonText="Add task"
      type="task"
      childId={props.childId}
      handleNewItem={props.handleNewItem}
    />
  </div>
);

const Task = props => (
  <li className="list-item">
    <button
      className="list-button"
      onClick={() => props.achieveTask(props.childId, props.index)}
    >
      <div className="list-button__name">{props.name}</div>
      {props.count > 0 && (
        <div className="list-button__counter">
          done {props.count} {props.count > 1 ? " times" : " time"}!
        </div>
      )}
      <div className="list-button__points">{props.points}</div>
    </button>
  </li>
);
