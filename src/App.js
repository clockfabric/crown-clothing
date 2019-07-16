import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={HomePage} />
				{/* <Route exact path='/hats' component={HatsPage} /> */}
			</Switch>
		</React.Fragment>
	);
}

export default App;
