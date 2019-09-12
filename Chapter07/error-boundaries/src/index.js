import React from "react";
import { render } from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import UserListContainer from "./UserListContainer";

render(
  <ErrorBoundary>
    <UserListContainer />
  </ErrorBoundary>,
  document.getElementById("root")
);
