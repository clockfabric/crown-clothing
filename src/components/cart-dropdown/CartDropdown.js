import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map(item => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
