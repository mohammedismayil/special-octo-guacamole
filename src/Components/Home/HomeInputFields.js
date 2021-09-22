import React, { Component } from "react";
// const [name, setName] = useState("");

export default class HomeInputFields extends Component {
  constructor(props) {
    super(props);

    this.state = { postData: this.props.postData, name: '', title: '' };
    // this.setState = () => {
    //   this.postData = this.props.postData;
    //   // this.title = "";
    //   // this.name = ""
    // };
    this.onAddButtonTapped.bind(this);
    this.onChangeName.bind(this);
  }
  onChangeName = (event) => {
    
    this.setState({
      name: event.target.value,
      title: event.target.value,
    });
    console.log(event.target.value)
    console.log(this.state.name)
    console.log(this.state.title)
  };
  onAddButtonTapped = () => {
    // const post = [{ id: 1, title: this.state.posts.title }];
    console.log(this.state.name)
    console.log("before set state")
    console.log(this.state.postData)
    var anotherPost = this.state.postData
    anotherPost.concat([
      {
            id:new Date().getUTCMilliseconds(),
            title:this.state.name,
            isDone:true,
          },
    ])
    this.setState({
      postData: anotherPost
    });
    // this.props.postData.push(this.state.posts);

    this.addNewTodo();
    
  };
  addNewTodo = () => {
    this.props.reloadHomeDataFromInput(
      this.state.postData,
      console.log("from reloadmehtod"),
      console.log(this.state.postData)
    );
  }
  render() {
    return (
      <div>
        <input
          type="name"
          onChange={this.onChangeName}
          value={this.state.name}
          placeholder="Add a to do"
        ></input>
        <button onClick={this.onAddButtonTapped}>add</button>
        {/* <h2>{this.state.name}</h2> */}
      </div>
    );
  }
}
