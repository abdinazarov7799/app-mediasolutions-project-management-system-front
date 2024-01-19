import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import {ButtonFilled} from "../../../components/ui/Button.jsx";
export default function LoginForm({ loginRequest = () => {}, ...rest }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const data = {
      username: values.username,
      password: values.password,
    };
    loginRequest(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt={8} isInvalid={errors.username}>
        <FormLabel htmlFor="username">User Name</FormLabel>
        <InputGroup>
          <Input
            id="username"
            {...register("username", {
              required: "Phone number is required",
            })}
            placeholder="User name"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.username && errors.username.message}
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
            minLength: { value: 8, message: "Minimum length should be 8" },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Stack spacing={6} color={"white"}>
        <ButtonFilled
          mt={8}
          isLoading={isSubmitting}
          type="submit"
        >
          <Text color="white">Login</Text>
        </ButtonFilled>
        <Text color={'#A4A4A4'} fontSize={14} mt={10} textAlign={"center"}>Copyright © 2024 of Tashkent Media Solutions</Text>
      </Stack>
    </form>
  );
}
