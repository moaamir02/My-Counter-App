// reducers/upDown.js
const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch(action.type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return initialState;
        default:
            return state;
    }
}

export default changeTheNumber;
