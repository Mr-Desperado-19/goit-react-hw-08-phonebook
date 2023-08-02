import { useSelector, useDispatch } from 'react-redux';
import { MdPersonSearch } from 'react-icons/md';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filtersSlice';
import {
  Heading,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };
  return (
    <Flex flexDirection="column" gap="20px">
      <Heading as="h4" size="md" textAlign="center">
        Find contacts by name
      </Heading>
      <InputGroup size="md">
        <Input
          placeholder="Search name..."
          size="md"
          type="text"
          value={filter}
          onChange={changeFilter}
          width={{ base: '350px', lg: '550px' }}
        />
        <InputLeftElement pointerEvents="none">
          <MdPersonSearch color="gray.400" />
        </InputLeftElement>
      </InputGroup>
    </Flex>
  );
};
