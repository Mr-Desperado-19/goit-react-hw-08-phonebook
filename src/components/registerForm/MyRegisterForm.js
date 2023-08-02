import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { selectErrorRegistration } from 'redux/auth/selectors';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorRegistration);

  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
      flexDirection="column"
    >
      {error && (
        <Text fontSize="lg" color="#E74C3C" mb="10px">
          Something went wrong. Try again!
        </Text>
      )}
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
            name: '',
          }}
          onSubmit={values => {
            const { name, email, password } = values;

            dispatch(
              register({
                name: name,
                email: email,
                password: password,
              })
            );
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">User Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 7) {
                        error = 'Password must contain at least 7 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="teal" width="full">
                  Sign Up
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
