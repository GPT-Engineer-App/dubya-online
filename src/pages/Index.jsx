// Personal website for George Bush
import { Box, Flex, Heading, Text, Image, Link, VStack, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580129958654-1f58bded0949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBCdXNoJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzOTU1Nzc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="George Bush" mb={4} />
        <Heading as="h1" size="xl">
          George Bush
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Former President & Public Speaker
        </Text>
      </Box>
      <Box py={5}>
        <Heading as="h2" size="lg">
          About Me
        </Heading>
        <Text fontSize="md" mt={3}>
          George Bush, the 43rd President of the United States, has been a pivotal figure in American politics and global affairs. After serving as president, he has been active in various humanitarian efforts, public speaking, and writing.
        </Text>
      </Box>
      <Box py={5}>
        <Heading as="h2" size="lg">
          Connect with Me
        </Heading>
        <VStack spacing={3} mt={3}>
          <Link href="https://twitter.com/georgebush" isExternal>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="solid">
              Twitter
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/georgebush" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:georgebush@example.com" isExternal>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              Email Me
            </Button>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
