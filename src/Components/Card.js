import '/home/ismayil/ismayildemo/special-octo-guacamole/src/css/styles.css';
import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }


    render() {
        return (
           <div className="max-w-xm rounded overflow-hidden shadow-lg my-2 mx-3 content-center bg-purple-700  h-auto"> 
  <div className="flex justify-center" >
  <img className="rounded-full justify-center bg-pink-600 border-2" src={this.props.profile.picture.large} alt="Sunset in the mountains"></img>
  </div>
  
   <div className="font-bold text-center text" >{this.props.profile.name.first} {this.props.profile.name.last}
   </div>
   <div className="font-light text-center">
   {this.props.profile.email}
   </div>
    </div>
        )
    }
}
