function Another(props) {
    return( 
      <div>
        {
props.comments.map(comment => (
    <div>
         <h1> {comment.name}</h1>
    <h1> {comment.comment}</h1>
        
        </div>
   
))
        } 
      </div>
  
     );
  }
  
  
  export default Another