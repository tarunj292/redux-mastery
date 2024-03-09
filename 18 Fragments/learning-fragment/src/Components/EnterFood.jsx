import styles from "./EnterFood.module.css"

const EnterFood = ({ handleOnChange }) => {

    return (
        <>
            <input type="text" placeholder="Enter Food Item here" className={styles.foodInput} onChange={handleOnChange} />
        </>
    )
}

export default EnterFood;