import React, { Component } from 'react';

class First extends Component {
  render() {
    return <p>First...</p>;
  }
}

class Second extends Component {
  render() {
    return <p>Second...</p>;
  }
}

class MyComponent extends Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;

export { First, Second };
