import React from "react";
import { render } from "react-dom";
import UserListContainer from "./UserListContainer";

render(
  <UserListContainer loading="playing the waiting game..." />,
  document.getElementById("root")
);
