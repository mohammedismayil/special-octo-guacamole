import React, { Component } from "react";
import HomeInputFields from "../Components/Home/HomeInputFields";
// import { useState } from "react";


export default class Home extends Component {
  constructor(props) {
    super(props);

    var arr = [];
    if (localStorage.getItem("todoArr") != null) {
      arr = JSON.parse(localStorage["todoArr"]);
    }

    this.state = { posts: [], anotherPostData: arr, name: "", title: "" };
    // this.setState = () => {
    //   this.anotherPostData = this.props.anotherPostData;
    // };
    this.reloadHomeDataFromInput = this.reloadHomeDataFromInput.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.switchToDo = this.switchToDo.bind(this);
  }
  removeToDo = (id) => {
    console.log("deleting a element");
    this.setState(
      {
        anotherPostData: this.state.anotherPostData.filter(
          (post) => post.id !== id
        ),
      },
      () => {
        localStorage.setItem(
          "todoArr",
          JSON.stringify(this.state.anotherPostData)
        );
        console.log("after deleting callback");
      }
    );
  };
  reloadHomeDataFromInput = (postData) => {
    console.log("reloading the home component");
    this.setState(
      {
        anotherPostData: postData,
        name: "ismayil",
      },
      () => {
        localStorage.setItem(
          "todoArr",
          JSON.stringify(this.state.anotherPostData)
        );
        // localStorage.setItem('todoArr', JSON.stringify(this.state.anotherPostData));
      }
    );
  };

  switchToDo = (id, index) => {
    console.log("Switch Tapped");
    this.setState(
      {
        anotherPostData: this.state.anotherPostData.map((post) => {
          if (post.id === id) {
            post.isDone = !post.isDone;


            // this.state.anotherPostData.push(
            //   this.state.anotherPostData.splice(index, 1)[0]
            // );
            return post;
          }
          return post;
        }),
      },
      () => {
        // console.log(this.state.anotherPostData);
        // this.reloadHomeDataFromInput(this.state.anotherPostData);

        

        localStorage.setItem(
          "todoArr",
          JSON.stringify(this.state.anotherPostData)
        );
        // this.reloadHomeDataFromInput(this.state.anotherPostData);
      }
    );
  };
  render() {
    // const { posts } = this.state;
    return (
      <div className="m-auto mx-2  mt-1 rounded-lg">
        <div className="text-center text-3xl content-center justify-center">
          Home page
        </div>
        <div className="flex pb-10 mb-10">
          <div className=" m-auto justify-center content-center">
            <div className="flex justify-center content-center ">
              <HomeInputFields
                reloadHomeDataFromInput={this.reloadHomeDataFromInput}
                postData={this.state.anotherPostData}
                key={this.state.anotherPostData}
              ></HomeInputFields>
            </div>

            <div className="justify-center content-center">
              <div className="w-auto mt-5 ">
                <ul>
                  {this.state.anotherPostData.map((post, index) => (
                    <li key={post.id}>
                      <div className="todocard">
                        <div
                          className={
                            post.isDone
                              ? "w-3 h-auto  bg-green-900 my-1"
                              : "w-3 h-auro bg-red-700 my-1"
                          }
                        ></div>

                        <div className="px-2">
                          <div className="font-extrabold text-xl">
                            {post.title}
                          </div>
                          <div>
                            <h2> {post.time}</h2>
                          </div>
                        </div>

                        <div className="flex  m-auto mr-2">
                          <div className="mr-2">
                            <button
                              onClick={() => this.switchToDo(post.id, index)}
                            >
                              {post.isDone ? "set as not done" : "set as done"}
                            </button>
                          </div>

                          <div
                            className="m-auto"
                            onClick={() => this.removeToDo(post.id)}
                          >
                            <button>
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //////
}
