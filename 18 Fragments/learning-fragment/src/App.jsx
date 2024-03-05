import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css"

function App() {

  const foodItemsList = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1 className="food-heading">Healty Food</h1>
      <ErrorMessage foodItemsList={foodItemsList} />
      <FoodItems foodItemsList={foodItemsList} />
    </>
  );
}

export default App;

// let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null; type-1
// if(foodItems.length === 0){
//   return <h1>I am still hungry.</h1>
// }; type 2
{/* {emptyMessage} type1 */ }