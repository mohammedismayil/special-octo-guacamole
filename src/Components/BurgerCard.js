import React, { Component } from 'react'

export default class BurgerCard extends Component {
    constructor(props){
      super(props);
      this.state = {
        cardDetails : []

      };

     }

    render() {
        return (
            <div className="lg:w-1/5 sm:w-full shadow-2xl rounded-xl my-7 mx-5">
            <div className="justify-center content-center mx-5 my-5 flex">
               <img src={this.props.cardDetails.image} className="justify-center content-center" alt="">
               </img>

            </div>
            
            <div className="text-center text-3xl font-bold">
            {this.props.cardDetails.title} 
            </div>
            <div className="text-center">
            {this.props.cardDetails.subtitle} 
            </div>

        </div>
        )
    }
}
