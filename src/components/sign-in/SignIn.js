import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
	googleSignInStart,
	emailSignInStart
} from "../../redux/user/user-actions";
import { connect } from "react-redux";
import "./SignIn.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: ""
	});

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = event => {
		const { value, name } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account.</h2>
			<span>Sign in with your email and password.</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					label='Email'
					type='email'
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='password'
					label='Password'
					type='password'
					value={password}
					handleChange={handleChange}
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn>
						{" "}
						Sign In with Google{" "}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
