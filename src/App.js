import  myComponent  from "./myComponent";
import  Another  from "./myAnotherComponent";
import  Welcome  from "./myComponent";
import firstImage from "./Assets/IMG_0040.JPG"
import './index.css';
// var element = <h1>Hello, world!</h1>;
// const mySecondElement =
// element
 
// ;
const myTestComponent = () => {
  return (
    <div>
        <p> from second test element</p>
    </div>
  )
}
// const comment = [{
//   "name"  : "ismayil" ,
//   "comment" : "hi da deii epdi iruka",
//   image:{firstImage}
// },{
//   name  : "ajith" ,
//   comment : "ennada panreenga , paathu romba naal aachu",
//   image:{firstImage}
// },{
//   name  : "john" ,
//   comment : "innumada uyiroda irukeenga",
//   image:{firstImage}
// }] ;
function App() {
  return (
    // <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    // <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={firstImage} alt="Woman's Face"></img>
    // <div class="text-center space-y-2 sm:text-left">
    //   <div class="space-y-0.5">
    //     <p class="text-lg text-black font-semibold">
    //      Mohammed ismayil
    //     </p>
    //     <p class="text-gray-500 font-medium">
    //       iOS Engineer
    //     </p>
    //   </div>
    //   <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    // </div>
// </div >

     <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store"></img>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
  );
}

export default App;
