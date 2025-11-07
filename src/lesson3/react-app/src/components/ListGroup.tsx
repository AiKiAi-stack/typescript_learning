function ListGroup() {
  let items = ["NYC", "Hongkong", "Beijing", "Tokyo", "Berlin"];
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
  return (
    <>
      <h1>hello world</h1>
      {items.length === 0 ? <p>No item here</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => {
              console.log(event);
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
