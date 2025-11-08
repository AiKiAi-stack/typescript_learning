import type { MouseEvent } from "react";
import { useState } from "react";

// { items: [], heading: string}
interface ListGroupProperties {
  items: string[];
  heading: string;
  // like onClick
  onSelectItem: (item : string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProperties) {
  
  // Hook : is a func, which allows us use inner feature in react
  // val1: variable    val2: updater function
  // useState(para1)   para1: default value
  const [selectedIdx, setSelectedIdx] = useState(-1)
  //   item = [];

  /*   if (item.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item here</p>
      </>
    ); */

  // 1st way
  //   const message = item.length === 0 ? <p>No item here</p> : null

  // 2nd way
  /*   const getMessage = () => {
    // return item.length === 0 ? <p>No item here</p> : null
    return item.length === 0 && <p>No item here</p>
  } */

  // Event Handler, a kind of onClick result
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item here</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIdx === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIdx(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
