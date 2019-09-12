import React, { Component } from "react";
import { render } from "react-dom";
import { users } from "./api";
import UserList from "./UserList";

const onClickCancel = e => {
  e.preventDefault();
  render(<p>Cancelled</p>, document.getElementById("root"));
};

export default class UserListContainer extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: []
  };

  componentDidMount() {
    this.job = users();

    this.job.then(
      result => {
        this.setState({ loading: null, error: null, users: result.users });
      },

      error => {
        this.setState({ loading: null, error: error.message });
      }
    );
  }

  componentWillUnmount() {
    this.job.cancel();
  }

  render() {
    return <UserList onClickCancel={onClickCancel} {...this.state} />;
  }
}
