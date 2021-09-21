import React, { Component } from "react";
import HomeInputFields from "../Components/Home/HomeInputFields";
// import { useState } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    
   
    this.state = { posts: [],anotherPostData: [],name:""};
    // this.setState = () => {
    //   this.posts = [];
    // };
    this.reloadHomeDataFromInput.bind(this);
  
  }
  reloadHomeDataFromInput = (postData) => {
    console.log("ok call back");
    console.log(postData)
    
    
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
              {post.id}
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
}
