import styles from "./Item.module.css"

const Item = (props) => {
    const foodItem = props.item;

    const handleBuyBtnClick = () => {
        console.log(`${foodItem} being bought`)
    }
    return (
        <li className={`${styles["kg-item"]} list-group-item`}>
            <span className={styles["kg-span"]}>{props.item}</span>
            <button className={`${styles.btn} btn btn-info`} onClick={handleBuyBtnClick}>Buy</button>
        </li>
    )
}

export default Item;