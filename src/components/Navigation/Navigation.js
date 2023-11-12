import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavigationNav } from './NavigationStyled';

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<NavigationNav>
			<NavLink activeclassname="active" to="/">
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink activeclassname="active" to="/contacts">
					Contacts
				</NavLink>
			)}
		</NavigationNav>
	);
};