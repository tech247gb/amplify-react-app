/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  const variants = [
    {
      overrides: { "Welcome to React App": {}, Button: {}, Dashboard: {} },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "Welcome to React App": { fontSize: "25px" },
        Button: { width: "71px", size: "small" },
        Content: { width: "451px", height: "330px" },
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Welcome to React App": { fontSize: "20px", lineHeight: "24px" },
        Button: { width: "71px", size: "small" },
        Content: { width: "353px", height: "330px" },
      },
      variantValues: { breakpoint: "breakpoint3" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "medium",
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
      gap="30px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Dashboard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="48px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to React App"
        {...getOverrideProps(overrides, "Welcome to React App")}
      ></Text>
      <Button
        width="100px"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="LOGOUT"
        onClick={handleSignOut}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
