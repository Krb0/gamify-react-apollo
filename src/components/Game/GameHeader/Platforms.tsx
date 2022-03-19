import { Stack, chakra, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GamePlatform } from "../../../models/games/game.schema";
import { fonts } from "../../../theme";
const Platforms = ({ platforms }: { platforms: [GamePlatform] }) => {
  return (
    <Stack alignItems="center" alignSelf={{ base: "flex-start", lg: "center" }}>
      <chakra.span fontWeight="600">Platforms</chakra.span>
      <Flex
        width={{
          base: "300px",
          xl: "350px",
          lg: "400px",
          "2xl": "600px",
        }}
        justifyContent={{ base: "center", xl: "space-between" }}
        textAlign="center"
        fontSize={{ base: "0.8rem", lg: "1rem" }}
        fontFamily={fonts.play}
        flexWrap="wrap"
      >
        {platforms?.map(({ platform }) => (
          <Link as={RouterLink} to={`/platform/${platform.id}`}>
            <chakra.span flexBasis="100%" maxWidth="90px">
              {platform.name}
            </chakra.span>
          </Link>
        ))}
      </Flex>
    </Stack>
  );
};

export default Platforms;
