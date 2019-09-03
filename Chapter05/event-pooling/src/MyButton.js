import React, { Component } from "react";

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default class MyButton extends Component {
  onClick(e) {
    console.log("clicked", e.currentTarget.style);

    fetchData().then(() => {
      console.log("callback", e.currentTarget.style);
    });
  }

  render() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
}
