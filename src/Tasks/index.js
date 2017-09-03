import React, { Component } from "react";

class Tasks extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: this.taskName.value,
      points: parseInt(this.taskPoints.value),
      count: 0
    };
    this.props.handleNewTask(formData);
    this.formRef.reset();
  }

  handleTaskClick(index) {
    this.props.checkTask(index);
  }
  render() {
    return (
      <div>
        <h4>Tasks:</h4>
        <ul className="task-items">
          {this.props.tasks.map((task, index) => (
            <Task
              index={index}
              key={index}
              {...task}
              checkTask={this.props.checkTask}
              handleTaskClick={this.handleTaskClick.bind(this)}
            />
          ))}
        </ul>
        <form
          className="input-form"
          onSubmit={this.handleSubmit.bind(this)}
          ref={ref => (this.formRef = ref)}
        >
          <fieldset>
            <label htmlFor="task">Task name</label>
            <input
              type="text"
              name="task"
              placeholder="task name..."
              ref={input => (this.taskName = input)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="points">Points</label>
            <input
              type="number"
              name="points"
              ref={input => (this.taskPoints = input)}
            />
          </fieldset>
          <input type="submit" value="Add task" />
        </form>
      </div>
    );
  }
}

const Task = props => (
  <li className="task-item">
    <div className="task-line">
      <span>{props.count}</span>
      <button
        className="task-button"
        onClick={() => props.handleTaskClick(props.index)}
      >
        {props.name} ({props.points})
      </button>
    </div>
  </li>
);

export default Tasks;
