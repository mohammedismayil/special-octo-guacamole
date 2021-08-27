import React, { Component } from 'react'
import BurgerCard from './BurgerCard'
// import Cards from './Cards'

export default class BurgerRestaurant extends Component {
  
    render() {
      var myArr = ["1","2","3","4","5","6","7"];
        // const [navbarOpen, setNavbarOpen] = React.useState(false);
        return (

<div className="bg-gray">
    <div className="">
     
    </div>
    <div className="bg-purple-700">
        top other sections
    </div>
    <div className="bg-purple-700 text-center text-6xl font-bold">
       OUR OFFERS
    </div>

    <div className="flex flex-wrap justify-center mx-20 my-10">

       {myArr.map(function (value, index, array) {
       return <BurgerCard> </BurgerCard>
        })
            }
     
      


    </div>
   
    
</div>
 
        )
    }
}
