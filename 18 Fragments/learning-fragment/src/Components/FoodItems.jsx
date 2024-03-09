import Item from "./Item"
const FoodItems = ({ foodItemsList }) => {
    return (
        <>
            <ul className="list-group">
                {foodItemsList.map((item) => (
                    <Item key={item} foodItem={item} handleBuyBtn={() => console.log(`clicked on ${item}`)} />
                ))}
            </ul>
        </>
    )
};

export default FoodItems;