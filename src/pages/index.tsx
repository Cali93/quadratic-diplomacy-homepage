import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FiCircle } from "react-icons/fi";

import qdSvg from "../components/Icons/qd.svg";
import QDIcon from "../components/Icons/qd-icon";

const Home = () => {
  const headingColor = useColorModeValue("yellow.600", "yellow.500");
  return (
    <Box mb={8} w="full">
      <HStack>
        <VStack align="left">
          <HStack align="center">
            <Heading color={headingColor}>Quadratic Diplomacy</Heading>
            <QDIcon />
          </HStack>
          <Text color="purple.500" fontWeight="bold">
            {" "}
            by MOONSHOT COLLECTIVE{" "}
          </Text>
          <Text>
            Distribute tokens among your team members based on quadratic voting.{" "}
          </Text>
          <Box maxW="300px">
            <Button w="239px" h="51px" fontSize="xl">
              Launch App
            </Button>
          </Box>
        </VStack>
        <Box w="300px"></Box>
      </HStack>
      <Divider mt="8" />
      <VStack mt="8" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          How it Works
        </Heading>
        <HStack>
          <Box m="2">
            <FiCircle />
            <Text>Select team members you’ve worked with </Text>
          </Box>
          <Box m="2">
            <FiCircle />
            <Text>Select team members you’ve worked with </Text>
          </Box>
          <Box m="2">
            <FiCircle />
            <Text>Select team members you’ve worked with </Text>
          </Box>
        </HStack>
      </VStack>
      <Divider mt="8" />

      <VStack mt="8" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          FAQs
        </Heading>
        <Text color="purple.500" fontWeight="bold">
          Lorem ipsum dolor sit amet?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </Text>
      </VStack>
    </Box>
  );
};

export default Home;
