
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp } from "../components/AppStyle";
import { useDispatch, useSelector } from "react-redux";
import { modalDeleteSelector, modalSelector } from 'redux/Contacts/selector';
import { fetchContacts } from 'redux/Contacts/operations';
import { useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';


export default function Contacts() {

	const modal = useSelector(modalSelector);
	const modalDelete = useSelector(modalDeleteSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);


	return (
		<ConteinerApp>
			<ContentApp>
				<TitleApp title="Phonebook">Phonebook</TitleApp>
				<ContactsForm />
				<TitleApp>Contacts</TitleApp>
				<Filter />
				<ContactsList />



			</ContentApp>
			{modal && <Modal />}
			{modalDelete && <ModalDelete />}
		</ConteinerApp>
	);

};
