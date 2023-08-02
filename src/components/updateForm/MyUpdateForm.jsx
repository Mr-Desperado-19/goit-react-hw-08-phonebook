import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { updateContact } from 'redux/contacts/operations';

export const UpdateForm = ({ onClose, contact }) => {
  const [contactName, setContactName] = useState(contact.name);
  const [contactPhone, setcontactPhone] = useState(contact.number);
  const dispatch = useDispatch();

  return (
    <Flex bg="gray.100" align="center" justify="center" background="#fff">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={({ name, number }) => {
            const body = {
              contactId: contact.id,
              text: {
                name: contactName,
                number: contactPhone,
              },
            };

            dispatch(updateContact(body));
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    value={contactName}
                    onChange={evt => setContactName(evt.target.value)}
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
                    value={contactPhone}
                    onChange={evt => setcontactPhone(evt.target.value)}
                    maxLength={13}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  width="full"
                  onClick={onClose}
                >
                  Save
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
