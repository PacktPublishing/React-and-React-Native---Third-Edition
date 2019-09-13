import React from "react";
import { render as renderJSX } from "react-dom";
import MyComponent from "./MyComponent";

const validProps = {
  myString: "My String",
  myNumber: 100,
  myBool: true,
  myFunc: () => "My Return Value",
  myArray: ["One", "Two", "Three"],
  myObject: { myProp: "My Prop" }
};

const missingProp = {
  myString: "My String",
  myNumber: 100,
  myBool: true,
  myFunc: () => "My Return Value",
  myArray: ["One", "Two", "Three"]
};

function render(props) {
  renderJSX(<MyComponent {...props} />, document.getElementById("root"));
}

render(validProps);
render(missingProp);
