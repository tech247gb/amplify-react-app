/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from 'react';  
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import {
  Button,
  Flex,
  Icon,
  TextField,
  View,
  PasswordField,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function handleLogin() {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      navigate('/dashboard');
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  const variants = [
    {
      overrides: {
        Vector: {},
        "user-alt": {},
        TextField29766922: {},
        TextField29766924: {},
        Button: {},
        Forms: {},
        Content: {},
        Login: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        Vector: {},
        "user-alt": {},
        TextField29766922: {},
        TextField29766924: {},
        Button: {},
        Forms: {},
        Content: { width: "451px", height: "330px" },
        Login: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Vector: {},
        "user-alt": {},
        TextField29766922: {},
        TextField29766924: {},
        Button: {},
        Forms: {},
        Content: { width: "353px", height: "330px" },
        Login: {},
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        display="flex"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Forms")}
        >
          <View
            width="50px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,0)"
            {...getOverrideProps(overrides, "user-alt")}
          >
            <Icon
              width="50px"
              height="50px"
              viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
              paths={[
                {
                  d: "M25 28.125C32.7637 28.125 39.0625 21.8262 39.0625 14.0625C39.0625 6.29883 32.7637 0 25 0C17.2363 0 10.9375 6.29883 10.9375 14.0625C10.9375 21.8262 17.2363 28.125 25 28.125ZM37.5 31.25L32.1191 31.25C29.9512 32.2461 27.5391 32.8125 25 32.8125C22.4609 32.8125 20.0586 32.2461 17.8809 31.25L12.5 31.25C5.5957 31.25 0 36.8457 0 43.75L0 45.3125C0 47.9004 2.09961 50 4.6875 50L45.3125 50C47.9004 50 50 47.9004 50 45.3125L50 43.75C50 36.8457 44.4043 31.25 37.5 31.25Z",
                  fill: "rgba(153,153,153,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <TextField
            width="unset"
            height="unset"
            label="Username"
            placeholder="hello@example.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            onChange={handleUsernameChange}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <PasswordField
            width="unset"
            height="unset"
            label="Password"
            placeholder="*****"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            onChange={handlePasswordChange}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></PasswordField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="primary"
            children="LOGIN"
            onClick={handleLogin}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
