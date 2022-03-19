import { Flex } from "@chakra-ui/react";
import { Game } from "../../../models/games/game.schema";
import Info from "./Info";
import Platforms from "./Platforms";

const GameHeader = ({ game }: { game: Game }) => {
  return (
    <Flex
      justifyContent={{ base: "center", md: "space-between" }}
      flexWrap="wrap"
      alignItems="center"
      gap="2rem"
    >
      <Info game={game} />
      <Platforms platforms={game.platforms} />
    </Flex>
  );
};

export default GameHeader;
