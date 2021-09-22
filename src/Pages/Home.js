import React, { Component } from "react";
import HomeInputFields from "../Components/Home/HomeInputFields";
// import { useState } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    
   
    this.state = { posts: [],anotherPostData: [],name:'',title:''};
    // this.setState = () => {
    //   this.anotherPostData = this.props.anotherPostData;
    // };
    this.reloadHomeDataFromInput.bind(this);
    // this.removeToDo.bind(this);
  }
  removeToDo = (id) => {

console.log("deleting a element")
    this.setState({anotherPostData: this.state.anotherPostData.filter(item => item.id !== id)}
      ,() => {
        console.log("after deleting callback");
      });
  
  }
  reloadHomeDataFromInput = (postData) => {
    this.setState({
      anotherPostData:postData,
      name:"ismayil",
    });
    
   
  }
  render() {
    // const { posts } = this.state;
    return (
      <div className="m-auto mx-32 h-64 rounded-lg">
        <div className="text-center text-3xl content-center justify-center">
          Home page
        </div>
        <HomeInputFields
          reloadHomeDataFromInput={this.reloadHomeDataFromInput}
          postData={this.state.anotherPostData}
        ></HomeInputFields>

        <ul>
          {this.state.anotherPostData.map((post) => (
            <li key={post.id}>
              <div className="flex">
                <div className={post.isDone ? "line-through" : "none"}>
                  {post.title}
                </div>
                <div className="bg-gray-900">
                  <button onClick={this.removeToDo(post.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  
}
