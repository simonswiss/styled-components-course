import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <h3 className="subheading">{this.props.subheading}</h3>
        <form
          className="inline-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.handleNewItem(
              this.props.childId,
              this.taskName,
              this.taskPoints,
              this.props.type
            );
            this.formRef.reset();
          }}
          ref={ref => (this.formRef = ref)}
        >
          <fieldset>
            <label htmlFor="task">{this.props.nameLabel}</label>
            <input
              type="text"
              name="item"
              placeholder="type away..."
              required
              ref={input => (this.taskName = input)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="points">{this.props.pointsLabel}</label>
            <input
              type="number"
              name="points"
              required
              ref={input => (this.taskPoints = input)}
            />
          </fieldset>
          <fieldset>
            <input
              type="submit"
              className="button"
              value={this.props.buttonText}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
