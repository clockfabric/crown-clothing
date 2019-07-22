import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => {
		return cartItems.reduce(
			(accumulator, currentElement) =>
				accumulator + currentElement.quantity,
			0
		);
	}
);
