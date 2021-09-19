import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
  }

  render() {
    return (
      <div className="m-auto mx-32 h-64 rounded-lg">
        <div className="text-center text-3xl content-center justify-center">
          Home page
        </div>

        <form>
          <input
            className="border-red-500 border-2"
            type="text"
            name="name"
            placeholder="Add a To-do"
          />
        </form>

        <li>{this.state.todo.map({})}</li>
      </div>
    );
  }
}
