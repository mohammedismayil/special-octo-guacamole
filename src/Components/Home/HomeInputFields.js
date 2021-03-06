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
   
  
  };
  onAddButtonTapped = () => {
   
   
   
    this.setState({
      postData: this.state.postData.concat([
        {
              id:new Date().getUTCMilliseconds(),
              title:this.state.name,
              isDone:true,
            },
      ])
    },() => {
      this.addNewTodo();
    });
    // this.props.postData.push(this.state.posts);

    
    
  };
  addNewTodo = () => {
    this.props.reloadHomeDataFromInput(
      this.state.postData,
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
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
