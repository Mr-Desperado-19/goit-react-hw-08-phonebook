import { useDispatch } from 'react-redux';
import {
  Flex,
  Text,
  Box,
  Spacer,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { GiSmartphone } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { UpdateModal } from 'components/modalWindow/MyUpdateModal';
import { MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex alignItems="center" gap="1px">
        <Box w="200px">
          <Text fontSize="md">{contact.name}</Text>
        </Box>
        <Spacer />
        <Box w="180px">
          <Flex gap="5px" alignItems="center">
            <GiSmartphone />
            <Text fontSize="md">{contact.number}</Text>
          </Flex>
        </Box>
        <Spacer />
        <Flex gap="5px">
          <Button
            color="#e74c3c"
            w="40px"
            padding="0 5px"
            variant="outline"
            onClick={() => {
              onOpen();
            }}
          >
            <GrEdit />
          </Button>
          <Button
            color="#e74c3c"
            w="40px"
            padding="0 5px"
            variant="outline"
            onClick={() => handleDelete(contact.id)}
          >
            <MdClose />
          </Button>
        </Flex>
      </Flex>
      <UpdateModal isOpen={isOpen} onClose={onClose} contact={contact} />
    </>
  );
};
