import React, { Component } from 'react'
import BurgerCard from './BurgerCard'
// import Cards from './Cards'
import {burgerData} from "./burger"
export default class BurgerRestaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
          cardDetails : []
  
        };
  
       }
  
    render() {
    //   var myArr = ["1","2","3","4","5","6","7"];
        // const [navbarOpen, setNavbarOpen] = React.useState(false);
        return (

<div className="bg-gray">
    <div className="">
     
    </div>
    <div className="bg-purple-700">
        top other sections
    </div>
    <div className="bg-purple-700 text-center text-6xl font-bold pb-3">
       OUR OFFERS
    </div>

    <div className="flex flex-wrap justify-center mx-20 my-0">

       {burgerData.data.map(item => {
       return <BurgerCard cardDetails = { item }> </BurgerCard>
        })
            }
     
      


    </div>
   
    
</div>
 
        )
    }
}
