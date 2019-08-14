import React, { Component } from 'react';

export default class MyButton extends Component {
  static defaultProps = {
    disabled: false,
    text: 'My Button'
  };

  render() {
    const { disabled, text } = this.props;

    return <button disabled={disabled}>{text}</button>;
  }
}
