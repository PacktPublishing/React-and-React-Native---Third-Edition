import React from "react";
import { render } from "react-dom";
import MyUser from "./MyUser";

const myUser = render(<MyUser />, document.getElementById("root"));

myUser.setState({
  modified: new Date(),
  first: "First1",
  last: "Last1"
});

myUser.setState({
  first: "First2",
  last: "Last2"
});
