// Reducers manage state
//this is initial state
export const initialState = {
    basket: [1, 2, 3, 4, 5, 6, 7],
};

function reducer(state, action) {
    console.log(action, ' is action')
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            break;
        default:
            return state;
    }
}

export default reducer;
