import firstImage from "./Assets/IMG_0040.JPG"
function Another(props) {
    return( 
      <div>
        {
props.comments.map(comment => (
    <div>
     
         <h1> {comment.name}</h1>
    <h1> {comment.comment}</h1>
    <img src={firstImage} alt=""> </img>
        </div>
   
))
        } 
      </div>
  
     );
  }
  
  
  export default Another