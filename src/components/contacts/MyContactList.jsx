import { useSelector } from 'react-redux';
import { List, ListItem } from '@chakra-ui/react';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { ContactItem } from './MyContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List spacing={3} pt="20px">
      {filtredContacts.map(contact => {
        return (
          <ListItem
            key={contact.id}
            w="450px"
            borderColor="teal"
            borderWidth="1px"
            borderRadius="8px"
            p="8px"
            width={{ base: '350px', lg: '550px' }}
          >
            <ContactItem contact={contact} />
          </ListItem>
        );
      })}
    </List>
  );
};