import { useDispatch } from "react-redux";
const Controls = () => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={increment}>+1</button>
                <button type="button" className="btn btn-success" onClick={decrement}>-1</button>
            </div>
        </>
    )
}

export default Controls;