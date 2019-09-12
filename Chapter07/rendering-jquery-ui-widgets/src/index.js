import React from "react";
import { render } from "react-dom";
import MyButtonContainer from "./MyButtonContainer";

function onClick() {
  this.setState({ disabled: true });
}

render(
  <section>
    <MyButtonContainer label="Text" />
    <MyButtonContainer
      label="My Button"
      icon="ui-icon-person"
      showLabel={false}
    />
    <MyButtonContainer label="Disable Me" onClick={onClick} />
  </section>,
  document.getElementById("root")
);
