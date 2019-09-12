import React, { Component } from "react";
import MyButton from "./MyButton";

export default class MyButtonContainer extends Component {
  componentDidMount() {
    this.setState({ ...this.props, onClick: this.props.onClick.bind(this) });
  }

  render() {
    return <MyButton {...this.state} />;
  }
}

MyButtonContainer.defaultProps = {
  onClick: () => {}
};
