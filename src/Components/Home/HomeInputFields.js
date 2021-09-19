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
      posts: [{ id: 2, title: event.target.value }],
    });
    // setName(event.target.value);
    // this.props.submitInputData(event.target.name.value);
  };
  onAddButtonTapped = () => {
    // const post = [{ id: 1, title: this.state.posts.title }];
    this.props.submitInputData(this.state.posts);
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
