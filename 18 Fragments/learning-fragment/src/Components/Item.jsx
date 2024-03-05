import styles from "./Item.module.css"

const Item = (props) => {
    return (
        <li className={`${styles["kg-item"]} list-group-item`}><span className={styles["kg-span"]}>{props.item}</span></li>
    )
}

export default Item;