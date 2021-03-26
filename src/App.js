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
  name  : "ismayil" ,
  comment : "hi da deii epdi iruka"
},{
  name  : "ajith" ,
  comment : "hi da deii epdi iruka"
},{
  name  : "john" ,
  comment : "hi da deii epdi iruka"
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
