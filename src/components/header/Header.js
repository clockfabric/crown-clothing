import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { signOutStart } from "../../redux/user/user-actions";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from "./header-styles";

const Header = ({ currentUser, cartHidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				{currentUser ? (
					<OptionLink as='span'>{currentUser.displayName}</OptionLink>
				) : (
					""
				)}
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={signOutStart}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{cartHidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
