// import ListGroup from "./components/ListGroup";
// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  // const handelClick = (event: MouseEvent) => console.log(event);

  // items = [];

  // const message = items.length === 0 ? "No items found" : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>;
  //     </>
  //   );
  // }

  return (
    <>
      <h1>List Group</h1>
      {/* {getMessage()} */}
      {/* {message} */}
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      {/* true and the functions = the functions
          false and the functions = false
      */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(even) => console.log(even)}
            // onClick={handelClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
