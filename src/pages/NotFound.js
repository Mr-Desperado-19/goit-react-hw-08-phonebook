import { Link as RouterLink } from 'react-router-dom';
import { Link, Flex, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const NotFound = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt="100px"
      gap="20px"
    >
      <Text fontSize="5xl">Page NotFound</Text>
      <Link
        as={RouterLink}
        to="/"
        sx={{
          '&:hover': {
            textDecoration: 'underline',
            color: 'teal',
          },
        }}
      >
        <ArrowBackIcon />
        Back to Home Page
      </Link>
    </Flex>
  );
};
