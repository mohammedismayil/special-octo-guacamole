import React, { Component } from 'react'

export default class BurgerCard extends Component {
    render() {
        return (
            <div className="w-1/5 shadow-2xl rounded-xl my-7 mx-5">
            <div className="justify-center  mx-5 my-5">
               <img src="https://i.ibb.co/82zyV1s/borgars.png" className="justify-center">
               </img>

            </div>
            
            <div className="text-center text-3xl font-bold">
              sunday cheeseburger $6 only
            </div>
            <div className="text-center">
              1 Flame Grilled Cheeseburger Sunday only. Valid until Dec 2020.
            </div>

        </div>
        )
    }
}
