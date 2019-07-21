import CartActionTypes from "./cart-action-types";

const INITIAL_STATE = {
	cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				cartHidden: !state.cartHidden
			};
		default:
			return state;
	}
};

export default cartReducer;
