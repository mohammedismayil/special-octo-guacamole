import React, { Component } from "react";
import HomeInputFields from "../Components/Home/HomeInputFields";
// import { useState } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    // this.setState = () => {
    //   this.posts = posts;
    // };
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="m-auto mx-32 h-64 rounded-lg">
        <div className="text-center text-3xl content-center justify-center">
          Home page
        </div>
        <HomeInputFields
          submitInputData={this.reloadHomeDataFromInput}
          postData={this.state.posts}
        ></HomeInputFields>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  reloadHomeDataFromInput = (inputData) => {
    console.log("ok call back");
    console.log(inputData);
    this.setState({
      posts: inputData,
    });
  };
}
