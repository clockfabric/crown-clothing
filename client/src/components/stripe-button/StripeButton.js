import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_sUZLW06l8BnJ88hG0PVdfLA30008tn0aj0";

	const onToken = token => {
		axios({
			url: "payment",
			mathod: "post",
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then(response => {
				alert("Payment successfull");
			})
			.catch(error => {
				console.log("Payment error: ", error);
				alert(
					"There was an issue with your payment. Please make sure you use the provided credit card."
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
