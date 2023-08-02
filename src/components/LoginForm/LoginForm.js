import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
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
import { logIn } from 'redux/auth/operations';
import { selectErrorLogIn } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorLogIn);

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
          The password or email is entered incorrectly
        </Text>
      )}
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          onSubmit={values => {
            const { email, password } = values;

            dispatch(
              logIn({
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
                  Log In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
