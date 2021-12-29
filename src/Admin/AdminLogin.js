import React, { Component } from "react";

export default class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
    isAdminLoggedin: localStorage.getItem("isAdminLogged"),
  };
  onchangeInputs = (name, value) => {
    // console.log(value.name);
    this.setState({
      [name]: value,
    });
  };

  onSubmitTapped() {
    console.log(this.state.email);
    console.log(this.state.password);
    if (
      this.state.email === "admin@gmail.com" &&
      this.state.password === "123456"
    ) {
      localStorage.setItem("isAdminLogged", true);
    }
  }
  render() {
    if (this.state.isAdminLoggedin) {
      return (
        <div>
          <h2>i am admin</h2>
        </div>
      );
    } else {
      return (
        <div className="m-auto w-1/2 bg-cardblue rounded-xl p-20 mt-10 h-1/2">
          <div className="m-auto w-80 bg-white rounded-xl p-20 mt-10 flex flex-wrap content-center justify-center ">
            <form onSubmit={this.onSubmitTapped()}>
              <h2 className="text-buttonBlue text-2xl bold">Login To Ocula</h2>

              <div className="m-5">
                <div>
                  <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    onChange={(e) =>
                      this.onchangeInputs(e.target.name, e.target.value)
                    }
                    className="border border-red-500 rounded m-3"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={(e) =>
                      this.onchangeInputs(e.target.name, e.target.value)
                    }
                    className="border border-red-500 rounded m-3"
                  />
                </div>
              </div>

              <button
                className="bg-buttonBlue w-full h-10 rounded-md text-white"
                type="submit"
              >
                login
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}
