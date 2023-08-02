import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/operations.js';
import { ContactEditor } from 'components/ContactEditor/ContactEditor.js';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/Contacts/ContactList.jsx';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from '../components/Loader/MyLoader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }}>
      <Box
        bg="teal"
        p="20px"
        pt={{ base: '50px', lg: '100px' }}
        height={{ base: '420px', lg: '100vh' }}
        width={{ base: '100%', lg: '250px' }}
      >
        <ContactEditor />
      </Box>
      <Box p="20px" m="0 auto">
        <Filter />
        {isLoading && <Loader />}
        {contacts.length === 0 && (
          <Box pt="50px">
            <Text fontSize="4xl" textAlign="center">
              There are no contacts yet
            </Text>
            <Text fontSize="4xl" textAlign="center">
              Create your first contact in the form
            </Text>
          </Box>
        )}

        <ContactList />
      </Box>
    </Flex>
  );
}
