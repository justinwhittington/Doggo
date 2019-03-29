import React, { Component } from "react";

import "./Users.css";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch("http://localhost:3000")
      .then(response => console.log(response))
      .then(response => this.setState({ users: response.users }))
      .catch(error => console.log(error));
  };

  showUsers = user => <div key={user.id}>{user.username}</div>;

  render() {
    const { users } = this.state;
    return <div>{(users.map = this.showUsers)}</div>;
  }
}

export default Users;
