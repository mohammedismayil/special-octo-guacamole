import React, { Component } from 'react'
import {productData} from '/home/ismayil/ismayildemo/special-octo-guacamole/src/MockData/productData' 
export default class ProductCard extends Component {
    render() {
        return (
            <div className="rounded-md shadow-lg h-64 w-1/3">
               
                <div className="h-32 bg-gray-900">

                <img className ="h-full w-full" src="https://passup.trioangle.com/fileStorage/uploads/products/10180/products_1631627536579.jpg">
                </img>

                </div>
                <div>
                    <div>
                        <h2>Nike Shoe</h2>
                        <h2>New York, 10007</h2>

                    </div>
                    <div>

                    </div>
                </div>
        
                

            </div>
        )
    }
}
