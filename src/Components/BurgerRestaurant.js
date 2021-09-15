import React, { Component } from 'react'
import BurgerCard from './BurgerCard'
// import Cards from './Cards'
// import {burgerData} from "./burger"
export default class BurgerRestaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    componentDidMount() {
        fetch("https://randomuser.me/api?results=5")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
                
              });
              // console.log(result.results.email)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        }else {
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
               {items.map(item => {
               return <BurgerCard  profile={item} key={item.id.value}> </BurgerCard>
                })
                    }
            </div>
            </div>
    
    
           
          );
        }
    
      }
}
//moving to aws server- deployment-should work on this - dynamically update the changes based on the server
