import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import ChildCard from "../ChildCard";
import AddChildToggle from "../AddChildToggle";
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
      <div className={`cards-view ${this.state.isAdding ? "is-adding" : ""}`}>
        <div className="cards-view__overlay" />
        <div className="cards-view__content">
          <h1>Let's work on these goals!</h1>
          {!this.state.count && (
            <h2 className="get-started">Add a child to get started...</h2>
          )}
          <div className="children-list">
            {kids.map((kid, index) => {
              const tasksCount = kid.tasks.length;
              const rewardsCount = kid.rewards.length;
              let achievements = 0;
              if (kid.rewards.length) {
                achievements = kid.rewards
                  .map(reward => reward.count)
                  .reduce((current, next) => current + next);
              }
              return (
                <Link
                  className="child-card__link"
                  key={index}
                  to={`/detail/${kid.id}`}
                >
                  <ChildCard
                    name={kid.name}
                    points={kid.points}
                    id={kid.id}
                    deleteChild={this.props.deleteChild}
                    achievements={achievements}
                    rewardsCount={rewardsCount}
                    tasksCount={tasksCount}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <AddChildToggle
          toggleForm={this.toggleForm}
          isAdding={this.state.isAdding}
        />
        {this.state.isAdding && (
          <AddChildForm addChild={this.props.addChild} kids={kids} />
        )}
      </div>
    );
  }
}
