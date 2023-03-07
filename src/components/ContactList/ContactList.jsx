import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};
