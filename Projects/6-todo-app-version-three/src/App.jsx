import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItems from "./Component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName + itemDueDate)
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  )

}

export default App;