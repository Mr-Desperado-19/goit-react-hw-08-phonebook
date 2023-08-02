import { Navigation } from '../navigation/MyNavigation';
import { UserMenu } from '../userMenu/MyUserMenu';
import { AuthNav } from '../authNav/MyAuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box as="header" bg="teal" p={4}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">
            <Navigation />
          </Heading>
        </Box>
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
