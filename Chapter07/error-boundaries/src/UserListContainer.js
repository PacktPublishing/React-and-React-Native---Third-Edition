import React, { Component } from "react";
import { users } from "./api";
import UserList from "./UserList";

export default class UserListContainer extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: []
  };

  componentDidMount() {
    users(false).then(
      result => {
        this.setState({ loading: null, error: null, users: result.users });
      },
      error => {
        this.setState({ loading: null, error });
      }
    );
  }

  render() {
    if (this.state.error !== null) {
      throw new Error(this.state.error);
    }
    return <UserList {...this.state} />;
  }
}
