import '/home/ismayil/ismayildemo/special-octo-guacamole/src/css/styles.css';
// const Card = () =>{
//     return (

      
// <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-3 content-center"> 
//   <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"></img>
//    <div className="font-bold text-center text" >
//    The Coldest Sunset
//    </div>
//    <div className="font-light bg-gray-50 text-center">
//    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//    </div>
//     </div>

// );
//     }
// export default Card;
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
           <div className="max-w-xm rounded overflow-hidden shadow-lg my-2 mx-3 content-center bg-purple-700 w-64 h-auto"> 
  <div className="flex justify-center" >
  <img className="rounded-full justify-center bg-pink-600 border-2" src="https://randomuser.me/api/portraits/women/84.jpg" alt="Sunset in the mountains"></img>
  </div>
  
   <div className="font-bold text-center text" >
   بهار کامروا
   </div>
   <div className="font-light text-center">
   bhr.khmrw@example.com
   </div>
    </div>
        )
    }
}
