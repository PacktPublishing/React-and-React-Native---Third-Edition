import React, { Fragment, Component } from "react";

export default class App extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0
  };

  onClick = name => () => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1
    }));
  };

  render() {
    const { first, second, third } = this.state;

    return (
      <Fragment>
        <button onClick={this.onClick("first")}>First {first}</button>
        <button onClick={this.onClick("second")}>Second {second}</button>
        <button onClick={this.onClick("third")}>Third {third}</button>
      </Fragment>
    );
  }
}
