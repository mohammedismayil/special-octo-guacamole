import React, { Component } from "react";
// const [name, setName] = useState("");

export default class HomeInputFields extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    // this.setState = () => {
    //   this.posts = posts;
    // };
  }
  onChangeName = (event) => {
    this.setState({
      posts: [
        {
          id: Math.random()
            .toString(36)
            .replace("0.", "todo" || ""),
          title: event.target.value,
        },
      ],
    });
    // setName(event.target.value);
    // this.props.submitInputData(event.target.name.value);
  };
  onAddButtonTapped = () => {
    // const post = [{ id: 1, title: this.state.posts.title }];
    this.props.postData.push(this.state.posts);
    this.props.submitInputData(this.props.postData);
  };
  render() {
    return (
      <div>
        <input
          type="name"
          onChange={this.onChangeName}
          value={this.state.posts.title}
        ></input>
        <button onClick={this.onAddButtonTapped}>add</button>
        {/* <h2>{name}</h2> */}
      </div>
    );
  }
}
