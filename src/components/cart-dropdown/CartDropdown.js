import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
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

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
