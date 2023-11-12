import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { AppBarHeader } from './AppBarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { GoSun } from 'react-icons/go';
import { HiMoon } from 'react-icons/hi';
import { DarkTheme, LightTheme } from "constants/DarkMode";
import { ToogleDarkMode } from 'components/AppStyle';
import { themesSelector } from 'redux/Contacts/selector';
import { setTheme } from 'redux/Contacts/contactsReduser';

export const AppBar = () => {
	const { isLoggedIn } = useAuth();
	const themes = useSelector(themesSelector);
	const dispatch = useDispatch();

	const changeTheme = () => {
		if (themes === LightTheme) {
			dispatch(setTheme(DarkTheme));
			return;
		}
		if (themes !== LightTheme) {
			dispatch(setTheme(LightTheme));
			return;
		}
	};

	const icon = themes === LightTheme ?
		<HiMoon size={30} /> :
		<GoSun size={30} />;
	return (
		<AppBarHeader>
			<ToogleDarkMode onClick={changeTheme}>{icon}</ToogleDarkMode>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</AppBarHeader>
	);
};
