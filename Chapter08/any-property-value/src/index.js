import React from "react";
import { render } from "react-dom";
import MyComponent from "./MyComponent";

render(
  <section>
    <MyComponent label="Regular Values" max={20} value={10} />
    <MyComponent label="String Values" max="20" value="10" />
    <MyComponent label={Number.MAX_SAFE_INTEGER} max={new Date()} value="10" />
  </section>,
  document.getElementById("root")
);
