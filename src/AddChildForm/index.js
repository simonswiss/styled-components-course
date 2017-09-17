import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class AddChild extends Component {
  constructor() {
    super();
    this.state = {
      trigger: false
    };
  }
  render() {
    // shortcircuit and redirect to created page after form is submitted
    if (this.state.trigger) {
      const newItem = this.props.kids.slice(-1)[0];
      return <Redirect to={`/detail/${newItem.id}`} />;
    }
    return (
      <div className="add-child">
        <form
          className="inline-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.addChild(this.newChild.value);
            this.setState({ trigger: true });
            this.newChild.value = "";
          }}
        >
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
    );
  }
}

export default AddChild;
