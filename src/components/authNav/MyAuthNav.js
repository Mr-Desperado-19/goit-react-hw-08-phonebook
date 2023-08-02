import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ButtonGroup gap="2">
      <Button as={RouterLink} to="/register" colorScheme="teal">
        Sign Up
      </Button>
      <Button as={RouterLink} to="/login" colorScheme="teal">
        Log In
      </Button>
    </ButtonGroup>
  );
};
