import React, { Component } from "react";

export default class MyButton extends Component {
  render() {
    return (
      <button onClick={e => console.log("clicked", e)}>
        {this.props.children}
      </button>
    );
  }
}
