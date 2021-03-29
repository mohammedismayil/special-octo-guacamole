import  myComponent  from "./myComponent";
import  Another  from "./myAnotherComponent";
import  Welcome  from "./myComponent";
import firstImage from "./Assets/IMG_0040.JPG"
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
const comment = [{
  "name"  : "ismayil" ,
  "comment" : "hi da deii epdi iruka",
  image:{firstImage}
},{
  name  : "ajith" ,
  comment : "ennada panreenga , paathu romba naal aachu",
  image:{firstImage}
},{
  name  : "john" ,
  comment : "innumada uyiroda irukeenga",
  image:{firstImage}
}] ;
function App() {
  return (
   
  
    <div>
        {/* <img src={firstImage}></img> */}
      <Another comments = {comment}  />

    </div>
     
  );
}

export default App;
