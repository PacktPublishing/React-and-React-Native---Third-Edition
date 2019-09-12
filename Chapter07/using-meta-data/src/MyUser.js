import React, { Component } from "react";

export default class MyUser extends Component {
  state = {
    modified: new Date(),
    first: "First",
    last: "Last"
  };

  shouldComponentUpdate(props, state) {
    return Number(state.modified) > Number(this.state.modified);
  }

  render() {
    const { modified, first, last } = this.state;

    return (
      <section>
        <p>{modified.toLocaleString()}</p>
        <p>{first}</p>
        <p>{last}</p>
      </section>
    );
  }
}
