// import  myComponent  from "./myComponent";
// import  Another  from "./myAnotherComponent";
// import  Welcome  from "./myComponent";
// import firstImage from "./Assets/IMG_0040.JPG"
import './index.css';
import React, { Component } from 'react';
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
function print() {
  console.log("oiii dei")
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
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
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <ul>
          
          {items.movies.map(item => (
            <li key={item.id}>
              <h3>{item.id}</h3>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
