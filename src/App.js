import React from "react";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={Shop} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
