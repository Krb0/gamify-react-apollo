import { Flex, Stack, chakra } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const Platforms = () => {
  const [data] = usePlatforms();
  return (
    <Flex
      gap="2rem"
      flexWrap="wrap"
      justifyContent="center"
      marginTop="3rem"
      paddingX="2.5rem"
    >
      {data?.platforms.map((platform) => (
        <Stack
          alignItems="center"
          padding="0.5rem 1rem"
          minWidth="150px"
          flex="1"
          textAlign="center"
          border="1px solid rgba(0,0,0,0.07)"
          justifyContent="center"
          cursor="pointer"
          transition="0.25s"
          _hover={{
            bgColor: "#000",
            color: "#fff",
          }}
        >
          <chakra.p>{platform.name} </chakra.p>
        </Stack>
      ))}
    </Flex>
  );
};

export default Platforms;
