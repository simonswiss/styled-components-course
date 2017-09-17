import React, { Component } from "react";
import { Link } from "react-router-dom";

import ChildSummary from "../ChildSummary";
import AddChild from "../AddChild";
import AddChildForm from "../AddChildForm";

export default class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdding: false
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentWillMount() {
    this.setState({ count: this.props.kids.length });
  }

  toggleForm() {
    this.setState({ isAdding: !this.state.isAdding });
  }
  render() {
    const { kids } = this.props;
    return (
      <div className="home-view-wrapper">
        <h1>Let's work on these goals!</h1>
        {!this.state.count && (
          <h2 className="get-started">Add a child to get started...</h2>
        )}
        <div className="children-list">
          {kids.map((child, index) => {
            const tasksCount = child.tasks.length;
            const rewardsCount = child.rewards.length;
            let achievements = 0;
            if (child.rewards.length) {
              achievements = child.rewards
                .map(reward => reward.count)
                .reduce((current, next) => current + next);
            }
            return (
              <Link
                className="child-card"
                key={index}
                to={`/detail/${child.id}`}
              >
                <header>
                  <h2>{child.name}</h2>
                  <div className="child-card-points">
                    <span className="points-label">points</span>
                    <h2>{child.points}</h2>
                  </div>
                </header>
                <ul className="child-card-stats">
                  <li className="stats-tasks">
                    <strong>{tasksCount}</strong> chore{tasksCount !== 1 && "s"}{" "}
                  </li>
                  <li className="stats-rewards">
                    <strong>{rewardsCount}</strong> reward{rewardsCount !== 1 && "s"}
                  </li>
                </ul>

                <div className="child-card-achievements">
                  <strong>{achievements}</strong> goal{achievements !== 1 && "s"}{" "}
                  unlocked
                </div>
                <button
                  className="child-card-delete"
                  onClick={() => this.props.deleteChild(child.id)}
                >
                  &times;
                </button>
              </Link>
            );
          })}
        </div>
        <AddChild toggleForm={this.toggleForm} isAdding={this.state.isAdding} />
        {this.state.isAdding && (
          <AddChildForm addChild={this.props.addChild} kids={kids} />
        )}
      </div>
    );
  }
}
