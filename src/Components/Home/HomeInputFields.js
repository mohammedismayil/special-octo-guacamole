import React, { Component } from "react";
// const [name, setName] = useState("");

export default class HomeInputFields extends Component {
  constructor(props) {
    super(props);
    
    this.state = { postData: [] ,name :""};
    this.setState = () => {
      this.postData = [];
    };
    this.onAddButtonTapped.bind(this);
    this.onChangeName.bind(this);
  }
  onChangeName = (event) => {


    this.setState({
      name:event.target.value,
    });
    console.log(event.target.value)
    // setName(event.target.value);
    // this.props.submitInputData(event.target.name.value);
  };
  onAddButtonTapped = () => {
    // const post = [{ id: 1, title: this.state.posts.title }];
    this.setState({
      postData: [
        {
          id:1,
          title:"mahle",
        },
        {
          id:2,
          title:"kajol",
        },
      ],
    });
    // this.props.postData.push(this.state.posts);
    this.props.reloadHomeDataFromInput([
      {
        id:1,
        title:"mahle",
      },
      {
        id:2,
        title:"kajol",
      },
    ]);
  };
  render() {
    return (
      <div>
        <input
          type="name"
          onChange={this.onChangeName}
          value={this.state.title}
        ></input>
        <button onClick={this.onAddButtonTapped}>add</button>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
