import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        {
          name: "Anthony",
          points: 0,
          tasks: [
            {
              name: "pack away room",
              points: 5,
              count: 0
            },
            { name: "clothes in the laundry basket", points: 3, count: 0 }
          ],
          rewards: [
            {
              name: "Movie date!",
              points: 50
            },
            {
              name: "chocolate",
              points: 30
            }
          ],
          newTask: {},
          newReward: {}
        }
      ]
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.checkTask = this.checkTask.bind(this);
  }

  // adding a new task
  handleNewTask(data) {
    const children = this.state.children;
    children[0].tasks.push(data);
    this.setState({ children });
  }

  // clicking on the task
  checkTask(index) {
    const { children } = this.state;
    const child = children[0];
    const task = child.tasks[index];
    const points = task.points;
    const totalPoints = child.points + points;

    const updatedTask = {
      name: task.name,
      points: task.points,
      count: task.count + 1
    };

    children[0].tasks[index] = updatedTask;
    children[0].points = totalPoints;
    console.log(children);

    this.setState({
      children
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.children.map((child, index) => (
          <Child
            key={index}
            name={child.name}
            points={child.points}
            tasks={child.tasks}
            rewards={child.rewards}
            handleNewTask={this.handleNewTask}
            checkTask={this.checkTask}
          />
        ))}
      </div>
    );
  }
}

export default App;
