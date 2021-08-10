
import './css/styles.css';
import './Assets/Images/card-top.jpg'
import Card from './Components/Card';
function App() {
  var arr = ["1","2","3"];
  const list = []

  arr.forEach((product) => {
    list.push(<Card></Card>)
  })
  return (
   

    <div className="grid grid-cols-3">
<Card></Card>
<Card></Card>
<Card></Card> 
<Card></Card>
<Card></Card>
<Card></Card>   
    </div>



  
  );
}

export default App;
