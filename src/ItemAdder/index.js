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
              this.taskName,
              this.taskPoints,
              this.props.itemType
            );
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
          <input type="submit" value={this.props.buttonText} />
        </form>
      </div>
    );
  }
}
