import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const toast = useToast();

  return (
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={({ name, number }, { resetForm }) => {
            const text = {
              name: name,
              number: number,
            };
            const contactsArray = contacts.filter(
              contact => contact.name === text.name
            );

            if (contactsArray.length !== 0) {
              toast({
                title: `${text.name} is alredy in contacts`,
                status: 'error',
                isClosable: true,
                position: 'top',
              });
              return;
            }

            dispatch(addContact(text));
            resetForm({ name: '', phone: '' });
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Text fontSize="xl" textAlign="center" mb="20px" color="teal">
                New Contact
              </Text>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="number">Phone</FormLabel>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="text"
                    variant="filled"
                    maxLength={13}
                  />
                </FormControl>

                <Button type="submit" colorScheme="teal" width="full">
                  Add
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
