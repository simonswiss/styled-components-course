import React from "react";
import ItemAdder from "../ItemAdder";
export default props => (
  <div className="column column--reward">
    <h2 className="column-heading">Tasks</h2>
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
    <h2 className="item-headline">{props.name}</h2>
    <div className="list-item--inline">
      <button
        className="button button--primary button--inline"
        onClick={() => props.achieveTask(props.childId, props.index)}
      >
        Give points!
      </button>

      <dl className="stat-block">
        <dt className="stat-block__label">points value</dt>
        <dd className="stat-block__value">{props.points}</dd>
      </dl>

      <dl className="stat-block">
        <dt className="stat-block__label">times completed</dt>
        <dd className="stat-block__value">{props.count}</dd>
      </dl>
    </div>
  </li>
);
