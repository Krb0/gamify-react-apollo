import { Box, Image, Stack, chakra, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import { Game } from "../../models/games/game.schema";

interface Query {
  data?: {
    game: Game;
  };
  loading: boolean;
}

const GamePage = () => {
  const params = useParams();
  const id = parseInt(params.id ? params.id : "1");
  const { data, loading }: Query = useGame(id);
  return (
    <Stack justifyContent="center" alignItems="center">
      {loading ? (
        <Loader />
      ) : (
        <Stack>
          <Box position="relative">
            <Image
              src={data?.game.backgroundImage}
              h="91vh"
              width="100vw"
              objectPosition="top"
              objectFit="cover"
            />
            <Box
              bgColor="rgba(0,0,0,.6)"
              w="100vw"
              h="full"
              top="0"
              left="0"
              position="absolute"
              zIndex="1"
            />
            <Stack
              position="absolute"
              top="27%"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="10px"
              zIndex="2"
            >
              <Flex alignSelf="center" alignItems="center" gap="0.5rem">
                <chakra.span
                  fontSize="2rem"
                  fontWeight="bold"
                  textAlign="center"
                  color="white"
                >
                  {data?.game.name}
                </chakra.span>
                <chakra.span fontSize="1.1rem" color="white">
                  {data?.game.rating} / 5
                </chakra.span>
              </Flex>
              <Text
                fontSize="1.4rem"
                fontWeight="500"
                textAlign="center"
                color="white"
                minWidth="280px"
              >
                {
                  data?.game.description
                    .substring(3, 325)
                    .split("</p>" || [])[0]
                }
              </Text>
            </Stack>
          </Box>
          <Stack>{data?.game.name}</Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default GamePage;

const Loader = () => {
  return (
    <Box
      position="absolute"
      top="50vh"
      left="50vw"
      textAlign="center"
      transform="translate(-50%,-50%)"
    >
      <Image
        src="https://cdn.shopify.com/s/files/1/0568/8419/9598/t/10/assets/loading.gif?v=12211448342275261349"
        w="90px"
        h="90px"
      />
    </Box>
  );
};
