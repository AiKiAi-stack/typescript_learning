/* import ListGroup from "./components/ListGroup"
function App() {
  let items = ["NYC", "Hongkong", "Beijing", "Tokyo", "Berlin"];

  const handleSelectItem = (item : string) => {
    console.log(item)
  }
  return <div><ListGroup items={items} heading={ "Cities" } onSelectItem={handleSelectItem} /></div>
} */

// import Alert from "./components/Alert";


/* function App() {
  return (<div>
    <Alert>
      Warning...Go away!!!! <span>Hello world</span>
    </Alert>
  </div>);
} */
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
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
export default App;
