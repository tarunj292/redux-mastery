import { useRef, useState } from "react"
import { BiMessageAdd } from "react-icons/bi"

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const noOfUpdates = useRef(0);

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
        noOfUpdates.current += 1;
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
        console.log(noOfUpdates.current);
    }

    const handleAddButton = (event) => {
        event.preventDefault();
        onNewItem(todoName, dueDate);
        setTodoName("");
        setDueDate("");
    }
    return (
        <div className="container text-center">
            <form className="row" onSubmit={handleAddButton}>
                <div className="col-4">
                    <input value={todoName} type="text" placeholder="Enter Todo Here" onChange={handleNameChange} />
                </div>
                <div className="col-4">
                    <input value={dueDate} type="date" onChange={handleDateChange} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success kg-button"><BiMessageAdd /></button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo