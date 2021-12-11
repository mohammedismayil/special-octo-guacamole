import React, { Component } from "react";

export default class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
  };
  onchangeInputs = (name, value) => {
    // console.log(value.name);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="m-auto w-1/2">
        <div>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={(e) => this.onchangeInputs(e.target.name, e.target.value)}
            className="border border-red-500 rounded m-3"
          />
        </div>
        <div>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={(e) => this.onchangeInputs(e.target.name, e.target.value)}
            className="border border-red-500 rounded m-3"
          />
        </div>

        <button>login</button>
      </div>
    );
  }
}
