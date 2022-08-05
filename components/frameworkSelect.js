import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const FrameworkSelect = ({ setTheFramework }) => {
  const [framework, setFramework] = useState("npx create-react-app my-app");
  const [appName, setAppName] = useState("my-app");

  return (
    <>
      <Box w='fit-content' m='auto'>
        <Stack>
          <Text>
            Select the framework that you want to create the project with
          </Text>

          <RadioGroup
            defaultValue='react'
            spacing={4}
            onChange={(value) => {
              setFramework(value);
            }}
          >
            <Stack>
              <Radio value={`npx create-react-app `}>React</Radio>
              <Radio value={`npx create-vue-app `}>Vue</Radio>
              <Radio value={`npx create-svelte-app `}>Svelte</Radio>
              <Radio value={`npx create-next-app `}>NextJS</Radio>
            </Stack>
          </RadioGroup>
          <Text>Enter your name for the app</Text>
          <Input
            placeholder='my-app'
            onChange={(e) => setAppName(e.target.value)}
          ></Input>

          <Button
            w='fit-parent'
            onClick={() => {
              console.log(framework, appName);
              //set the selected framework property to framework + appName
              setTheFramework(framework + " " + appName + " ");
            }}
            bg='brand.prettiPurple'
            _hover={{ bg: "brand.prettiPurple" }}
            _active={{ bg: "brand.prettiPurple" }}
          >
            <Text>Continue</Text>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default FrameworkSelect;
