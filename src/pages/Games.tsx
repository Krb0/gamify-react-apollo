import { Box, chakra, Flex, Image, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useUpcoming from "../hooks/useUpcoming";
import Loader from "../components/Loader";
const Games = () => {
  /*   const [data] = useGames();*/
  const [upcoming, loading] = useUpcoming(16);

  return loading ? (
    <Loader />
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
      <Flex flexWrap="wrap" gap="1rem" justifyContent="center">
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
