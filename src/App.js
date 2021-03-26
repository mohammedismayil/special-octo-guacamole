import  myComponent  from "./myComponent";
import  commentComponent  from "./myComponent";

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
const comment = {
  name  : "ismayil" ,
  comment : "hi da deii epdi iruka"
};
function App() {
  return (
    // // element,
    // <div>
    //   <h1>i am a header</h1>
    //   i am div inside app </div>
    <div>
{/* <Welcome /> */}
<commentComponent />
    </div>
     
      // myComponent()
    // mySecondElement
  );
}

export default App;
