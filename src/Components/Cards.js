
    import '/home/ismayil/ismayildemo/special-octo-guacamole/src/css/styles.css';
    
import React, { Component } from 'react'
import Card from './Card';

export default class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
}
componentDidMount() {
    fetch("https://randomuser.me/api?results=5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
            
          });
          // console.log(result.results.email)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }else {
      return (
<div>
<div>

<p className="font-extrabold text-6xl text-center">Random Users</p>
   </div>


        <div className="flex flex-wrap justify-center mx-1 my-5">
             
            {
              items.map( item => (
                <Card key={item.id.value} profile={item}></Card>
                
              ))
            }
        </div>
</div>

       
      );
    }

  }
}

