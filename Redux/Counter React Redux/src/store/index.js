import { createStore } from 'redux';

const INITIAL_STATE = {
    counter: 0
}
const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const counterStore = createStore(counterReducer);

export default counterStore;