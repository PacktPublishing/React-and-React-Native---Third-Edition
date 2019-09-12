import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/button";
import "jquery-ui/themes/base/all.css";

export default class MyButton extends Component {
  componentDidMount() {
    $(this.button).button(this.props);
  }

  componentDidUpdate() {
    $(this.button).button("option", this.props);
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        ref={button => {
          this.button = button;
        }}
      />
    );
  }
}
