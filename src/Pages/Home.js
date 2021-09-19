import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];
    this.state = { posts: [] };
    this.setState = () => {
      this.posts = posts;
    };
  }

  componentDidMount = () => {
    const postss = [
        { id: 1, title: "Hello World", content: "Welcome to learning React!" },
        {
          id: 2,
          title: "Installation",
          content: "You can install React from npm.",
        },
      ];
    // this.setState = () => {
    //     posts = postss;
    //   };
  }

  render() {
    const posts = [
        { id: 1, title: "Hello World", content: "Welcome to learning React!" },
        {
          id: 2,
          title: "Installation",
          content: "You can install React from npm.",
        },
      ];
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

        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>

        
      </div>
      
    );
  }
}
