// so this function may have pass the props - and it always return a single div.
// inside the div- u can write your own UI, but we cannot give another div below the div inside the functional components.
// using this functional components we can use it to seperate our complex UI into seperate components .
//
function Welcome(props) {
  return( 
    <div>

<h1>Hello, {props.name} </h1>
    <h2> hello {props.name} im from h2</h2>
    <div>
inside another div - so life is full of divs


    </div>
    </div>

   );
}


export default Welcome