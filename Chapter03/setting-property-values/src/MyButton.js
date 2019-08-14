import React, { Component } from 'react';

export default class MyButton extends Component {
  render() {
    const { disabled, text } = this.props;

    return <button disabled={disabled}>{text}</button>;
  }
}
