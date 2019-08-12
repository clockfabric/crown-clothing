import React, { useEffect } from "react";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";
import Checkout from "./pages/checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-actions";
import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={Shop} />
				<Route path='/checkout' exact component={Checkout} />
				<Route
					exact
					path='/signin'
					render={() =>
						currentUser ? (
							<Redirect to='/' />
						) : (
							<SignInAndSignUpPage />
						)
					}
				/>
			</Switch>
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
