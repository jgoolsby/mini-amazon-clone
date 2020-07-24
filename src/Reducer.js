export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

// Reducers manage state
//this is initial state
export const initialState = {
    basket: [{
        id: "1534534445",
        title: "Nudges Chicken Jerky Cuts, 40 oz.",
        price: 26.46,
        rating: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/81cysvUqikL._AC_SX522_.jpg"
    },
    {
        id: "153245345",
        title: "Nudges Chicken Jerky Cuts, 40 oz.",
        price: 26.46,
        rating: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/81cysvUqikL._AC_SX522_.jpg"
    }
    ],
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
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product( id: ${action.id}) as its `)
            }



            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;
