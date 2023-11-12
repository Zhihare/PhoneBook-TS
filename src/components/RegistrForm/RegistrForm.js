import { ConteinerApp, ContentApp, TitleApp } from 'components/AppStyle';
import { ContainerContactsForm, ContainerContactsLabel, ConteinerContactsButton, ConteinerContactsInput } from 'components/ContactsForm/CotactsFormStyle';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';


export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<ConteinerApp className='login'>
			<ContentApp>
				<TitleApp title="Registr">Register</TitleApp>
				<ContainerContactsForm onSubmit={handleSubmit} autoComplete="off">
					<ContainerContactsLabel >
						Username
						<ConteinerContactsInput type="text" name="name" />
					</ContainerContactsLabel>
					<ContainerContactsLabel>
						Email
						<ConteinerContactsInput type="email" name="email" />
					</ContainerContactsLabel>
					<ContainerContactsLabel>
						Password
						<ConteinerContactsInput type="password" name="password" />
					</ContainerContactsLabel>
					<ConteinerContactsButton type="submit">Register</ConteinerContactsButton>
				</ContainerContactsForm>
			</ContentApp>
		</ConteinerApp>
	);
};
