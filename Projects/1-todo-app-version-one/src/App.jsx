import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";
import "./App.css";

function App() {

  return (
    <center class='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  )

}

export default App;