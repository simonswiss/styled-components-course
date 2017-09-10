/* TODO
-  edit mode: 
      - child name edit
      - task edit / delete (warn about losing points for that task)
      - reward edit / delete

- progress bar for rewards
*/

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
    this.achieveTask = this.achieveTask.bind(this);
    this.resetChild = this.resetChild.bind(this);
    this.addChild = this.addChild.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
    this.unlockReward = this.unlockReward.bind(this);
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
    const sure = window.confirm(
      "Are you sure you want to delete this child? This cannot be undone."
    );
    if (sure) {
      const children = this.state.children.filter(child => child.id !== id);
      this.setState({ children });
    }
  }

  resetChild(childId) {
    const sure = window.confirm(
      "Are you sure you want to reset this child? This will delete all tasks, rewards and total points. It cannot be undone."
    );
    if (sure) {
      const { children } = this.state;

      const index = children.map(child => child.id).indexOf(childId);
      const child = children[index];

      children[index] = {
        ...child,
        name: child.name,
        points: 0,
        tasks: [],
        rewards: []
      };

      this.setState({ children });
    }
  }

  // adding a new task
  handleNewItem(childId, name, points, type) {
    const item = {
      name: name.value,
      points: parseInt(points.value),
      count: 0
    };

    const { children } = this.state;
    children.map((child, index) => {
      if (child.id === childId) {
        if (type === "task") {
          children[index].tasks.push(item);
        } else {
          children[index].rewards.push(item);
        }
      }
    });

    this.setState({ children });
  }

  // clicking on the task
  achieveTask(childId, taskIndex) {
    const { children } = this.state;
    // the target child index
    const index = children.map(child => child.id).indexOf(childId);
    const child = children[index];
    // the task that has been clicked
    const task = child.tasks[taskIndex];

    // adding points to the tally
    const points = task.points;
    const totalPoints = child.points + points;

    const updatedTask = {
      name: task.name,
      points: task.points,
      count: task.count + 1
    };

    children[index].tasks[taskIndex] = updatedTask;
    children[index].points = totalPoints;

    this.setState({
      children
    });
  }

  unlockReward(childId, rewardIndex) {
    console.log(childId, rewardIndex);

    const { children } = this.state;
    // the target child index
    const index = children.map(child => child.id).indexOf(childId);
    const child = children[index];
    // the task that has been clicked
    const reward = child.rewards[rewardIndex];

    // removing the reward points from tally
    const points = reward.points;
    const totalPoints = child.points - points;

    const updatedReward = {
      name: reward.name,
      points: reward.points,
      count: reward.count + 1
    };

    children[index].rewards[rewardIndex] = updatedReward;
    children[index].points = totalPoints;

    this.setState({
      children
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        {!this.state.children.length && (
          <h2 className="get-started">Add a child to get started...</h2>
        )}
        <div className="children">
          {this.state.children.map(child => (
            <Child
              key={child.id}
              {...child}
              handleNewItem={this.handleNewItem}
              achieveTask={this.achieveTask}
              resetChild={this.resetChild}
              deleteChild={this.deleteChild}
              unlockReward={this.unlockReward}
            />
          ))}
        </div>

        <div className="add-child">
          <form className="inline-form" onSubmit={this.addChild}>
            <fieldset>
              <input
                ref={input => (this.newChild = input)}
                required
                type="text"
                placeholder="Type a name..."
              />
            </fieldset>
            <fieldset>
              <input type="submit" value="Add child" />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
