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
              points: 50,
              count: 0
            },
            {
              name: "chocolate",
              points: 30,
              count: 0
            }
          ],
          newTask: {},
          newReward: {}
        }
      ]
    };

    this.handleNewItem = this.handleNewItem.bind(this);
    this.checkTask = this.checkTask.bind(this);
    this.resetChild = this.resetChild.bind(this);
  }

  componentDidMount() {
    const startState = JSON.parse(localStorage.getItem("appState")) || null;

    if (startState) {
      this.setState(startState);
    }
  }

  // adding a new task
  handleNewItem(name, points, type) {
    const item = {
      name: name.value,
      points: parseInt(points.value),
      count: 0
    };

    const children = this.state.children;

    if (type === "task") {
      children[0].tasks.push(item);
    } else {
      children[0].rewards.push(item);
    }

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

    this.setState({
      children
    });

    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  resetChild() {
    const sure = window.confirm("are you sure??");
    if (sure) {
      const { children } = this.state;
      const child = children[0];

      children[0] = {
        ...child,
        name: child.name,
        points: 0,
        tasks: []
      };

      this.setState({ children });
    }
  }

  render() {
    return (
      <div className="children">
        {this.state.children.map((child, index) => (
          <Child
            key={index}
            name={child.name}
            points={child.points}
            tasks={child.tasks}
            rewards={child.rewards}
            handleNewItem={this.handleNewItem}
            checkTask={this.checkTask}
            resetChild={this.resetChild}
          />
        ))}
      </div>
    );
  }
}

export default App;
