import React, { Component } from "react";
// const [name, setName] = useState("");

export default class HomeInputFields extends Component {
  constructor(props) {
    super(props);
    
    this.state = { postData: [],name:"",title:""};
    this.setState = () => {
      this.postData = [];
      this.title = "";
      this.name = ""
    };
    this.onAddButtonTapped.bind(this);
    this.onChangeName.bind(this);
  }
  onChangeName = (event) => {


    this.setState({
      name:event.target.value,
      title:event.target.value,
    })
    console.log(this.state.title)
    // setName(event.target.value);
    // this.props.submitInputData(event.target.name.value);
  };
  onAddButtonTapped = () => {
    // const post = [{ id: 1, title: this.state.posts.title }];
    this.setState({
      postData: [
        {
          id:new Date().getUTCMilliseconds(),
          title:this.state.title,
        },
      ],
    });
    // this.props.postData.push(this.state.posts);
    this.props.reloadHomeDataFromInput(
      [
        {
          id:new Date().getUTCMilliseconds(),
          title:this.state.title,
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
          placeholder="Add a to do"
        ></input>
        <button onClick={this.onAddButtonTapped}>add</button>
        <h2>{this.state.name}</h2>
        
      </div>
    );
  }
}
