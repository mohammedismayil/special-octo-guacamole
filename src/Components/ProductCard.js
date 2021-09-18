import React, { Component } from 'react'
// import {productData} from '/home/ismayil/ismayildemo/special-octo-guacamole/src/MockData/productData' 
export default class ProductCard extends Component {
    chatClicked = () => {
     console.log("chat has been clicked");
    }
    render() {
        return (
            <div className="rounded-lg overflow-hidden shadow-md h-64 w-1/5 mx-5 my-5">
               
                <div className="h-44 hover:scale-115 transform transition duration-500 relative">
                    <div className = "bg-themeblue rounded-full flex w-20 -ml-2 absolute">
                        <div className="m-auto text-white">
                        Free

                        </div>
                        

                    </div>

                <img className ="h-full w-full " alt = "" src="https://passup.trioangle.com/fileStorage/uploads/products/10180/products_1631627536579.jpg">
                </img>

                </div>
                <div className="flex my-3">
                    <div className="ml-2">
                        <h2>Nike Shoe</h2>
                        <h2>New York, 10007</h2>

                    </div>
                    <div className="flex m-auto mr-0">
                        <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>

                        </div>

                        <div className="mr-2" onClick = {this.chatClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                       </svg> 

                        </div>




                    </div>
                </div>
        
                

            </div>
        )
    }
}
