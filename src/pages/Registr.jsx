import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';

export default function Register() {
	return (
		<div>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			<RegisterForm />
		</div>
	);
}