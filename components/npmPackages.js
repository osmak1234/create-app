import React from "react";
import {
  Box,
  Text,
  Button,
  useClipboard,
  Stack,
  Checkbox,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const NpmPackages = ({ setTheFramework, theFramework }) => {
  const [npmCommands, setNpmCommands] = useState(["", "", "", "", "", "", ""]);
  const { hasCopied, onCopy } = useClipboard(theFramework);
  const [finishedCommand, setFinishedCommand] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setFinishedCommand(theFramework);
  }, []);

  return (
    <>
      <Box m='auto' w='fit-content'>
        <Stack spacing={4}>
          <Text> Select your npm packages you want to install </Text>
          <Checkbox
            value={
              "&& npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion"
            }
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            Chakra UI
          </Checkbox>
          <Checkbox
            value={"&& npm i firebase"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            firebase
          </Checkbox>
          <Checkbox
            value={"&& npm i mongodb"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            MongoDB
          </Checkbox>

          <Checkbox
            value={"&& npm i axios"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            Axios
          </Checkbox>

          <Checkbox
            value={"&& npm i -D tailwindcss"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            Tailwind CSS
          </Checkbox>

          <Checkbox
            value={"&& npm i --save lodash"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            Lodash
          </Checkbox>

          <Checkbox
            value={"&& npm i three"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            Three JS
          </Checkbox>

          <Checkbox
            value={"&& npm i react-icons --save"}
            onChange={(e) => {
              if (e.target.checked) {
                setTheFramework([...theFramework, e.target.value]);
              } else {
                setTheFramework(
                  theFramework.filter(
                    (npmCommand) => npmCommand !== e.target.value
                  )
                );
              }
            }}
          >
            React Icons
          </Checkbox>

          <Box bg='gray.900' w='400px' minH='100px' borderRadius='5px' p='5px'>
            <Stack direction='row'>
              <Text w='90%'>{theFramework}</Text>
              <Stack direction='column'>
                <Button
                  onClick={onCopy}
                  bg={hasCopied ? "green" : "brand.prettiPurple"}
                  _hover={{ bg: hasCopied ? "green" : "brand.prettiPurple" }}
                  _active={{ bg: "brand.normalYellow" }}
                >
                  <FaCopy />
                </Button>
                <Button
                  onClick={() => {
                    setDisabled(false);
                    setTheFramework(finishedCommand);
                  }}
                  bg={"brand.prettiPurple"}
                  _hover={{ bg: "brand.prettiPurple" }}
                  _active={{ bg: "brand.normalYellow" }}
                >
                  <AiOutlineReload />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default NpmPackages;
