import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList, ContactForm, Filter } from 'components';
import { Container, SectionHeader, PageHeader } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PageHeader>Phonebook</PageHeader>
      <ContactForm />
      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
      <ToastContainer />
    </Container>
  );
}
