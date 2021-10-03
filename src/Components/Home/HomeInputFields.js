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
    event.preventDefault()

    
    this.setState({
      name: event.target.value,
      title: event.target.value,
    });
   
  
  };
  onAddButtonTapped = () => {
    console.log(this.state.postData);

    if (this.state.name !== "") {
      this.setState(
        {
          postData: this.state.postData.concat([
            {
              id: new Date().getUTCMilliseconds(),
              title: this.state.name,
              isDone: false,
            },
          ]),
        },
        () => {
          this.addNewTodo();
        }
      );
    }

    // this.props.postData.push(this.state.posts);
  };
  addNewTodo = () => {
    this.props.reloadHomeDataFromInput(this.state.postData);
    console.log(this.state.postData);
  };
  render() {
    return (
      <div className="justify-center content-center m-auto flex mt-5">

        <div>
        <input
          type="name"
          className="border border-red-500 border-opacity-100 border-transparent"
          onChange={this.onChangeName}
          value={this.state.name}
          placeholder="Add a to do"
        ></input>
        </div>
     

        <div className="mx-5 bg-purple-900 rounded-md px-5 text-white">
        <button onClick={this.onAddButtonTapped}>Add</button>
        </div>
       
      </div>
    );
  }
}
