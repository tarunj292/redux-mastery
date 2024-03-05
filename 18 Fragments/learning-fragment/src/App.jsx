import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {

  // const foodItems = [];

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null; type-1

  // if(foodItems.length === 0){
  //   return <h1>I am still hungry.</h1>
  // }; type 2
  return (
    <>
      <h1>Healty Food</h1>
      {/* {emptyMessage} type1 */}
      <ErrorMessage />
      <FoodItems />
    </>
  );
}

export default App;