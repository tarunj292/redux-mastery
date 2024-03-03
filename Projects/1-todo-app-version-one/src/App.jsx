import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";
import "./App.css";

function App() {

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-contanier">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  )

}

export default App;