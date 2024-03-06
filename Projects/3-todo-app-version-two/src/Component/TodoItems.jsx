import TodoItem from "./TodoItem"; "./TodoItem"
import styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {
    return (
        <>
            <div className={styles.itemsContanier}>
                {todoItems.map(item =>
                    <TodoItem todoDate={item.dueDate} todoName={item.name} />
                )}
            </div>
        </>
    )
}

export default TodoItems;