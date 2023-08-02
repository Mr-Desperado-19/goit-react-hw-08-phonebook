import { Link as RouterLink } from 'react-router-dom';
import { Container, Heading, Text, Button, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="1200px">
      <Heading
        as="h2"
        noOfLines={1}
        mt="200px"
        textAlign="center"
        color="teal"
        fontSize={{ base: '30px', lg: '50px' }}
      >
        ContactEase PhoneBook
      </Heading>
      <Text
        fontSize={{ base: '16px', lg: '20px' }}
        textAlign="center"
        mt="50px"
        color="teal.800"
      >
        Quickly and easily create and save contacts
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mt="40px"
      >
        <Button as={RouterLink} to="/register" colorScheme="teal">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
