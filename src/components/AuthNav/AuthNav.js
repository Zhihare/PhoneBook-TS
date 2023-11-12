import { UserMenuDiv } from 'components/UserMenu/UserMenuStyled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
	return (
		<UserMenuDiv>
			<NavLink activeclassname="active" to="/register">
				Register
			</NavLink>
			<NavLink activeclassname="active" to="/login">
				Log In
			</NavLink>
		</UserMenuDiv>
	);
};
