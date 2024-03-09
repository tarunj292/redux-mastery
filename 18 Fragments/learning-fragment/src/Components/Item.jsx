import styles from "./Item.module.css"

const Item = (props) => {
    const foodItem = props.foodItem;

    // const handleBuyBtnClick = () => {
    //     console.log(`${foodItem} being bought`)
    // }
    return (
        <li className={`${styles["kg-item"]} list-group-item`}>
            <span className={styles["kg-span"]}>{foodItem}</span>
            <button className={`${styles.btn} btn btn-info`} onClick={props.handleBuyBtn}>Buy</button>
        </li>
    )
}

export default Item;