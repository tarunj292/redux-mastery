import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import FoodInput from "./Components/FoodInput";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css"
import Container from "./Components/Container";
import { useState } from "react";

function App() {

  let [textToShow, setTextState] = useState("Food Item Entered by user");

  const foodItemsList = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  const handleOnChange = (event) => {
    setTextState(event.target.value);
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        <ErrorMessage foodItemsList={foodItemsList} />
        <FoodInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
        <FoodItems foodItemsList={foodItemsList} />
      </Container>
      {/* <Container>
        <p>Above are the list of healthy foods that are good for your health and well being.</p>
      </Container> */}
    </>
  );
}

export default App;

// let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null; type-1
// if(foodItems.length === 0){
//   return <h1>I am still hungry.</h1>
// }; type 2
{/* {emptyMessage} type1 */ }