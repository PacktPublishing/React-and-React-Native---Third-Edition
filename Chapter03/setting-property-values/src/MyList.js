import React, { Component } from 'react';

export default class MyList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}
