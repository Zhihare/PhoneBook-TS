import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { UserMenuMobileDiv } from './UserMenuStyled';
import { TbLogout } from 'react-icons/tb';
import { ContactsListButton } from 'components/ContactsList/ContactsListStyle';
import { DivIcon } from 'components/AppBar/AppBarStyle';

export const MobileUserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<UserMenuMobileDiv>
			<DivIcon>

				<p className='rotateP'>{user.name.charAt(0)}</p>
				<span>{user.name}</span>
				<div className='rotateName'></div>
			</DivIcon>
			<DivIcon>
				<ContactsListButton className='appButton' type="button" onClick={() => dispatch(logOut())}>
					<TbLogout size={30} />
				</ContactsListButton>
			</DivIcon>
		</UserMenuMobileDiv>
	);
};