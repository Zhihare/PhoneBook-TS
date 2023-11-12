import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { UserMenuDiv } from './UserMenuStyled';
import { TbLogout } from 'react-icons/tb'
import { ContactsListButton } from 'components/ContactsList/ContactsListStyle';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<UserMenuDiv>
			<p>Welcome, {user.name}</p>
			<ContactsListButton type="button" onClick={() => dispatch(logOut())}>
				<TbLogout size={30} />
			</ContactsListButton>
		</UserMenuDiv>
	);
};