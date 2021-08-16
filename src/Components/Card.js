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

            <div className="flex lg:w-1/2 sm:w-full">
           <div className="w-full rounded shadow-lg mx-5 my-5 bg-purple-700"> 
  
  <div className="flex justify-center pt-5 pb-1"> 
  <img className="rounded-full  bg-pink-600 border-2" src={this.props.profile.picture.large} alt="Sunset in the mountains"></img>
  </div>
  
  <div>

  <div className="font-bold text-center text" >{this.props.profile.name.first} {this.props.profile.name.last}
   </div>
   <div className="font-light text-center pb-5 pt-1">
   {this.props.profile.email}
   </div>
  </div>

    </div>
            </div>

        )
    }
}
