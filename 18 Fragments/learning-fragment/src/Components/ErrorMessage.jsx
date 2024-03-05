const ErrorMessage = () => {

    const foodItemsList = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

    return (
        <>
            {foodItemsList.length === 0 && <h3>I am still hungey.</h3> /*type3*/}
        </>
    )
}

export default ErrorMessage;