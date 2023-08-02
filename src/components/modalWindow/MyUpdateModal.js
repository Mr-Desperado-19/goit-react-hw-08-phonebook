import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { UpdateForm } from 'components/updateForm/MyUpdateForm';

export const UpdateModal = ({ isOpen, onClose, contact }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Editing a contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={30}>
          <UpdateForm onClose={onClose} contact={contact} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
