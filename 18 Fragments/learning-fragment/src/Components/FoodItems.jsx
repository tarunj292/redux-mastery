import Item from "./Item"
const FoodItems = ({ foodItemsList }) => {

    return (
        <>
            <ul className="list-group">
                {foodItemsList.map((item) => (
                    <Item key={item} item={item} />
                ))}
            </ul>
        </>
    )
};

export default FoodItems;