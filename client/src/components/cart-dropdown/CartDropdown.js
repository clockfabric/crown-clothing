import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, hideCart }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(item => {
						return <CartItem key={item.id} item={item} />;
					})
				) : (
					<span className='empty-message'>Your Cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					hideCart();
				}}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
	hideCart: () => dispatch(toggleCartHidden())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(CartDropdown)
);
