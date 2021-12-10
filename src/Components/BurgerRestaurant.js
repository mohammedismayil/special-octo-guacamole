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
            items: [],
            totalPages:3,
            currentPage:1,
            perPageCount:10
          };
    }
    componentDidMount() {
      this.fetchData()
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
              <div className="flex flex-wrap justify-center mx-20 my-0">
              {items.map(item => {
               return <BurgerCard  profile={item} key={item.id.value}> </BurgerCard>
                })
                    }

              </div>
              {this.state.currentPage < this.state.totalPages && <div>
                  <button onClick = {this.loadmoreclick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
                 Load More
                   </button>

                 </div> }

            </div>

            </div>
    
    
           
          );
        }
    
      }

      loadmoreclick = () => {
        this.setState({
          currentPage : this.state.currentPage + 1,
          perPageCount:10

        });
    
        this.fetchData()
      }

     fetchData = () => {
      fetch(`https://randomuser.me/api?results=${this.state.perPageCount * this.state.currentPage}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
            
          });
          console.log(`data from api ${result.results}`)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
     }
}
//moving to aws server- deployment-should work on this - dynamically update the changes based on the server
