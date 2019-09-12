import React from "react";
import { render as renderJSX } from "react-dom";
import MyList from "./MyList";

function render() {
  const myList = renderJSX(<MyList />, document.getElementById("root"));
  myList.data = myList.setState(state => ({
    items: [0, ...state.items.slice(1)]
  }));
}

for (let i = 0; i < 100; i++) {
  render();
}
