import { ConteinerApp, ContentApp, TitleApp } from 'components/AppStyle';
import { ContainerContactsForm, ContainerContactsLabel, ConteinerContactsButton, ConteinerContactsInput } from 'components/ContactsForm/CotactsFormStyle';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<ConteinerApp className='login'>
			<ContentApp>
				<TitleApp title="Login">Login</TitleApp>
				<ContainerContactsForm onSubmit={handleSubmit} autoComplete="off">
					<ContainerContactsLabel >
						Email
						<ConteinerContactsInput type="email" name="email" />
					</ContainerContactsLabel>
					<ContainerContactsLabel >
						Password
						<ConteinerContactsInput type="password" name="password" />
					</ContainerContactsLabel>
					<ConteinerContactsButton type="submit">Log In</ConteinerContactsButton>
				</ContainerContactsForm>
			</ContentApp>
		</ConteinerApp>
	);
};
