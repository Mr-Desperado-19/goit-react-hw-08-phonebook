import { useAuth } from 'hooks';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Flex,
  useBreakpointValue,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const isLgScreen = useBreakpointValue({ base: false, lg: true });

  const { isLoggedIn } = useAuth();

  return (
    <Box>
      {isLgScreen ? (
        <Flex as="nav" gap="5">
          <Link as={RouterLink} to="/" color="#ffffff">
            Home
          </Link>
          {isLoggedIn && (
            <Link as={RouterLink} to="/contacts" color="#ffffff">
              Contacts
            </Link>
          )}
        </Flex>
      ) : (
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? 'Close' : <HamburgerIcon />}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link as={RouterLink} to="/" color="teal">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  {isLoggedIn && (
                    <Link as={RouterLink} to="/contacts" color="teal">
                      Contacts
                    </Link>
                  )}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      )}
    </Box>
  );
};
