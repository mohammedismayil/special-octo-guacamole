import  myComponent  from "./myComponent";
import  Another  from "./myAnotherComponent";
import  Welcome  from "./myComponent";

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
  image:"{process.env.PUBLIC_URL + '/public/Assets/IMG_0040.JPG'}"
},{
  name  : "ajith" ,
  comment : "ennada panreenga , paathu romba naal aachu",
  image:"{process.env.PUBLIC_URL + '/public/Assets/IMG_0040.JPG'}"
},{
  name  : "john" ,
  comment : "innumada uyiroda irukeenga",
  image:"{process.env.PUBLIC_URL + '/public/Assets/IMG_0040.JPG'}"
}] ;
function App() {
  return (
    // // element,
    // <div>
    //   <h1>i am a header</h1>
    //   i am div inside app </div>
    <div>
      <Another comments = {comment}  />
{/* <Welcome /> */}

    </div>
     
      // myComponent()
    // mySecondElement
  );
}

export default App;
