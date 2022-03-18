import { Box, chakra, Flex, Image, Link, Stack } from "@chakra-ui/react";
import useUpcoming from "../hooks/useUpcoming";
import { Link as RouterLink } from "react-router-dom";
const Games = () => {
  /*   const [data] = useGames();*/
  const [upcoming, loading] = useUpcoming(12);

  return loading ? (
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
  ) : (
    <Box>
      <chakra.h3
        fontSize="2rem"
        color="#424242"
        fontWeight="700"
        paddingLeft={{
          base: "0",
          lg: "6%",
        }}
        textAlign={{
          base: "center",
          lg: "left",
        }}
        py="2rem"
      >
        Upcoming Games
      </chakra.h3>
      <Flex flexWrap="wrap" gap="1rem" justifyContent="center" cursor="pointer">
        {upcoming?.upcomingGames.map(
          (game: { name: string; backgroundImage: string; id: number }) => (
            <Link as={RouterLink} to={`game/${game.id}`}>
              <Stack
                width={{
                  base: "100vw",
                  xs: "400px",
                }}
                borderRadius="5px"
                bgColor="white"
                shadow="2xl"
                border="1px solid rgba(50,50,50,.08)"
              >
                <Box padding="1.5rem" height="75px">
                  <chakra.h1 style={{ fontSize: "1.1rem" }} textAlign="center">
                    {game.name}
                  </chakra.h1>
                </Box>
                <Image
                  src={game.backgroundImage}
                  w="full"
                  height="250px"
                  objectFit="cover"
                  borderBottomRadius="5px"
                />
              </Stack>
            </Link>
          )
        )}
      </Flex>
    </Box>
  );
};

export default Games;
