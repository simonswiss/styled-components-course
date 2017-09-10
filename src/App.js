import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: []
    };

    this.handleNewItem = this.handleNewItem.bind(this);
    this.checkTask = this.checkTask.bind(this);
    this.resetChild = this.resetChild.bind(this);
    this.addChild = this.addChild.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
  }

  componentDidMount() {
    const startState = JSON.parse(localStorage.getItem("appState")) || null;

    if (startState) {
      this.setState(startState);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  // adding child
  addChild(e) {
    e.preventDefault();
    const newChild = {
      id: Date.now(),
      name: this.newChild.value,
      points: 0,
      tasks: [],
      rewards: []
    };
    const { children } = this.state;
    children.push(newChild);

    this.setState({ children });
    this.newChild.value = "";
  }

  deleteChild(id) {
    const sure = window.confirm("are you sure??");
    if (sure) {
      const children = this.state.children.filter(child => child.id !== id);
      this.setState({ children });
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
      <div className="app-wrapper">
        <div className="children">
          {this.state.children.map(child => (
            <Child
              key={child.id}
              {...child}
              handleNewItem={this.handleNewItem}
              checkTask={this.checkTask}
              resetChild={this.resetChild}
              deleteChild={this.deleteChild}
            />
          ))}
        </div>

        <div className="add-child">
          <form onSubmit={this.addChild}>
            <input
              ref={input => (this.newChild = input)}
              required
              type="text"
              placeholder="child's name..."
            />
            <input type="submit" value="Add child" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
