import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
export default function LoginForm({ loginRequest = () => {}, ...rest }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const phone = values.login.replace(/\D/g, "");
    const data = {
      login: phone,
      password: values.password,
    };
    loginRequest(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt={8} isInvalid={errors.login}>
        <FormLabel htmlFor="login">Phone number</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+998" />
          <Input
            id="login"
            {...register("login", {
              required: "Phone number is required",
              minLength: { value: 7, message: "Minimum length should be 7" },
            })}
            type="tel"
            placeholder="(__) ___ __ __"
            mask="(**)-***-****"
            as={InputMask}
          />
        </InputGroup>

        <FormErrorMessage>
          {errors.login && errors.login.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt={5} isInvalid={errors.password}>
        <FormLabel htmlFor={"password"}>Password</FormLabel>
        <Input
          id={"password"}
          type="password"
          placeholder={"Password"}
          {...register("password", {
            required: "Password  is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Stack spacing={6} color={"white"}>
        <Button
          mt={8}
          colorScheme="cyan"
          isLoading={isSubmitting}
          type="submit"
        >
          <Text color="white">Login</Text>
        </Button>
      </Stack>
    </form>
  );
}
