import React from "react";
import { render } from "react-dom";
import MyList from "./MyList";

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" }
];

render(<MyList items={items} />, document.getElementById("root"));
