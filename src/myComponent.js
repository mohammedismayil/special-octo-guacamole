// so this function may have pass the props - and it always return a single div.
// inside the div- u can write your own UI, but we cannot give another div below the div inside the functional components.
// using this functional components we can use it to seperate our complex UI into seperate components .
//
import firstImage from "./Assets/IMG_0040.JPG"
function Welcome(props) {
  return( 
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={firstImage} alt="Woman's Face">
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-gray-500 font-medium">
          Product Engineer
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
    </img>
  </div >
)
}


export default Welcome