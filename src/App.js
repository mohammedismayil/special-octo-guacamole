// import  myComponent  from "./myComponent";
// import  Another  from "./myAnotherComponent";
// import  Welcome  from "./myComponent";
// import firstImage from "./Assets/IMG_0040.JPG"
import './index.css';
import React from 'react';
// import { request } from 'express';
// import component
// var element = <h1>Hello, world!</h1>;
// const mySecondElement =
// element
 
// // ;
// const myTestComponent = () => {
//   return (
//     <div>
//         <p> from second test element</p>
//     </div>
//   )
// }
// const comment = [{
//   "name"  : "ismayil" ,
//   "comment" : "hi da deii epdi iruka",
//   image:{firstImage}
// },{
//   name  : "ajith" ,
//   comment : "ennada panreenga , paathu romba naal aachu",
//   image:{firstImage}
// },{
//   name  : "john" ,
//   comment : "innumada uyiroda irukeenga",
//   image:{firstImage}
// }] ;
// function print() {
//   console.log("oiii dei")
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      name:'tet',
      released_on:'25 noav',
    };
  }
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  insertUser(event){
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name:this.state.name,released_on:this.state.released_on})
     
    };
    fetch('http://localhost:3000/listmovies', requestOptions)
      .then(response => response.json())


      .then((data) => console.log('This is your data', data));
      // .then(data => this.setState({ postId: data.id }));
    
  }
  componentDidMount() {
    fetch('http://localhost:3000/listmovies')
      .then(res => res.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          items: response
        });
      });
  }

  render() {
    const { items } = this.state;

    const { isLoaded } = this.state;
    // const { name } = this.state;
    // const { released_on } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <form onSubmit= {this.insertUser.bind(this)}>
        <ul>
          
          {items.movies.map(item => (
            <li key={item.id}>
              <h3>{item.id}</h3>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

         <label>Name</label>
<input type='text' name="name" value={this.state.name.value} onChange = {this.handleChange.bind(this)}></input>
<label>released on</label>
<input type='text' name="released_on"  value={this.state.released_on.value} onChange = {this.handleChange.bind(this)}></input>
<button type='submit'>insert Movie</button>
        </form> 
      );
    }
  }
}


export default App;