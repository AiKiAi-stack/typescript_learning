import type { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProp {
  active: boolean
  hello: string
}
//styled.li<ListItemProp> like implements interface
const ListItem = styled.li<ListItemProp>`
  padding: 5px 0;
  background: ${props => props.active ? 'blue' : 'none'}}
`;

// { items: [], heading: string}
interface ListGroupProperties {
  items: string[];
  heading: string;
  // like onClick
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProperties) {
  // Hook : is a func, which allows us use inner feature in react
  // val1: variable    val2: updater function
  // useState(para1)   para1: default value
  const [selectedIdx, setSelectedIdx] = useState(-1);
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
      <List>
        {items.map((item, index) => (
          <ListItem
            hello="hello world"
            active = {selectedIdx === index}
            key={item}
            onClick={() => {
              setSelectedIdx(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
