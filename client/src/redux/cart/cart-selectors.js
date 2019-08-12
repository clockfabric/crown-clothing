import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.cartHidden
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

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => {
		return cartItems.reduce(
			(accumulatedTotal, currentItem) =>
				accumulatedTotal + currentItem.quantity * currentItem.price,
			0
		);
	}
);
