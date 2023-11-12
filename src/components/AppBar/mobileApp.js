
import { useAuth } from '../hooks/useAuth';
import { DivIcon, MobileAppBarHeader } from './AppBarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { GoSun } from 'react-icons/go';
import { HiMoon } from 'react-icons/hi';
import { DarkTheme, LightTheme } from "constants/DarkMode";
import { ToogleDarkMode } from 'components/AppStyle';
import { themesSelector } from 'redux/Contacts/selector';
import { setTheme } from 'redux/Contacts/contactsReduser';
import { MobileUserMenu } from 'components/UserMenu/mobileUzerMenu';
import { MobileAuthNav } from 'components/AuthNav/mobileAutoNav';
import { MobileNavigation } from 'components/Navigation/MobileNavigation';

export const MobileAppBar = () => {
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
		<MobileAppBarHeader>
			<DivIcon>
				<ToogleDarkMode onClick={changeTheme}>{icon}</ToogleDarkMode>
			</DivIcon>
			<MobileNavigation />
			{isLoggedIn ? <MobileUserMenu /> : <MobileAuthNav />}
		</MobileAppBarHeader>
	);
};
