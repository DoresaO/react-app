// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
