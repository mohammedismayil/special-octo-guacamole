import React, { Component } from 'react'
import BurgerCard from './BurgerCard'
// import Cards from './Cards'
// import {burgerData} from "./burger"
export default class BurgerRestaurant extends Component {

    componentDidMount(){
        console.log("im called from did mount")

        fetch("https://randomuser.me/api?results=5")
        .then(res=>res.json())
        .then(
            (result) => {
                this.setState({
                    burgerDataa: [result.results]
                    
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
        console.log(this.burgerDataa)

    }
    constructor(props){
        super(props);
        this.state = {
          burgerDataa: []
  
        };
  
       }
  
    render() {
    //   var myArr = ["1","2","3","4","5","6","7"];
        // const [navbarOpen, setNavbarOpen] = React.useState(false);
        const { burgerDataa } = this.state;
        console.log("im called from render")
       
        return (

<div className="bg-gray">
    <div className="">
     
    </div>
    <div className="bg-purple-700">
        top other sections -check
    </div>
    <div className="bg-purple-700 text-center text-6xl font-bold pb-3">
       OUR OFFERS
    </div>

    <div className="flex flex-wrap justify-center mx-20 my-0">



       {burgerDataa.map(item => {
       return <BurgerCard cardDetails = { item } key = {item.id}> </BurgerCard>
        })
            }
     
      


    </div>
   
    
</div>
 
        )
    }
}
//moving to aws server- deployment-should work on this - dynamically update the changes based on the server
