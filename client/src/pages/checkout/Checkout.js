import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import "./Checkout.scss";

const Checkout = ({ cartItems, totalValue }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(currentItem => (
			<CheckoutItem key={currentItem.id} cartItem={currentItem} />
		))}
		<div className='total'>TOTAL: ${totalValue}</div>
		<div className='test-warning'>
			*Please use the following test credit cart for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeButton price={totalValue} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalValue: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
