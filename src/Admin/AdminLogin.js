import React, { Component } from "react";

export default class AdminLogin extends Component {
  render() {
    return (
      <div>
        <input type="text" value="email" />

        <input type="text" value="password" />

        <button>login</button>
      </div>
    );
  }
}
