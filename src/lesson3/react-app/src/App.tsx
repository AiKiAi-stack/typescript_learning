/* 
  This is the ListGroup exercise
*/

import ListGroup from "./components/ListGroup/ListGroup"
function App0() {
  let items = ["NYC", "Hongkong", "Beijing", "Tokyo", "Berlin"];

  const handleSelectItem = (item : string) => {
    console.log(item)
  }
  return <div><ListGroup items={items} heading={ "Cities" } onSelectItem={handleSelectItem} /></div>
}


/* 
  This is the alert exercies
*/
import Alert from "./components/Alert";
function App1() {
  return (<div>
    <Alert onClose={()=>{}}>
      Warning...Go away!!!! <span>Hello world</span>
    </Alert>
  </div>);
}


/* 
  This is the alert&btn exercies
*/


import { useState } from "react";
// import Alert from "./components/Alert";
import Button from "./components/Button";
import ButtonMUI from "./components/ButtonMUI"
function App2() {
  const [alertVisibility, setAlertVisable] = useState(false)
  return (<div>
    
    { alertVisibility &&
    <Alert onClose={ () => setAlertVisable(false)}>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </Alert>}
    <Button color="success" onClick={ () => {
      setAlertVisable(true)
    }} >
      Alert!
    </Button>
  </div>)
}

import Like from "./components/Like/Like";

function App3() {

  return (
    <div>
      <Like onClick={() => {
        console.log("You Like it!")
      }}/>
    </div>
  )
}

/* 
  StateHook exercise
  1. 
*/

import Message from "./components/Message";
function App4() {
  // const [FirstName, setFirstName] = useState('')
  // const [LastName, setLastName] = useState('')
  // 👇
  const [person, setPerson] = useState({
    //Notice: do not use deeply nested structure here!
    firstName: '',
    lastName: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  
  
  return (
    <div>
      <Button onClick={()=>{}}>Show</Button>
    </div>
  )
}

/* 
  Update nested structure
*/

/* function App() {
  const [drink, setDrink] = useState({
    name: 'Coke',
    price: 6,
    from:{
      cold: true,
      City: 'the LA',
    }
  })
  const handleClick = ()=>{
    const newDrink = {
      ...drink,
      price: 7,
      from:{...drink.from, City: 'Shanghai'}
    }
    setDrink(newDrink)
  }
  return(
    <div>
      {drink.from.City}
      {drink.price}
      <ButtonMUI onClick={handleClick}/>
    </div>
  )
  
} */

/* function App() {

  const [arrs,setArr] = useState(["1","2"])

  const handleClick = () => {
    // Add
    setArr([...arrs, "Yes"])
    
    //Delete
    let lastOne = arrs.pop
    setArr(arrs.filter(arr => arr === "1"))

    //Update
    setArr(arrs.map(arr => arr==="2" ? "200" : arr))
  }

  return (<div>
    
  </div>)
} */


  /* 
  Expandable Text Practice
  */
import Expandable from "./components/Expandable";
const App5 = () => {
  //use lorem100
  let content = "helloWorld"
  return (
    <div>
      <Expandable maxChar={12} >
        {content}
      </Expandable>
      
    </div>
  );
};

import Form from "./components/Form";
const App = () => {
  return (
    <div>
      <Form></Form>
    </div>
  );
};


export default App;
