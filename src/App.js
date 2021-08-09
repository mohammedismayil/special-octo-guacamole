
import './css/styles.css';
import './Assets/Images/card-top.jpg'
function App() {
  return (
    <div className="flex">
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-10"> 
  <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"></img>
   <div className="font-bold text-center font-extrabold" >
   The Coldest Sunset
   </div>
   <div className="font-semibold bg-gray-50 text-center">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
   </div>
    </div>
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-10"> 

    <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"></img>
      </div>
    </div>

  
  );
}

export default App;
