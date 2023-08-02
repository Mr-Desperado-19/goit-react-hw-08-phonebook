import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { Button, Text, Flex } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap="5" flexDirection={{ base: 'column', lg: 'row' }}>
      <Text fontSize="lg" color="#fff">
        {user.email}
      </Text>
      <Button colorScheme="teal" size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
