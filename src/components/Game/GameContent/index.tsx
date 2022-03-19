import { Image, chakra } from "@chakra-ui/react";
import { Game } from "../../../models/games/game.schema";
import { fonts } from "../../../theme";

const GameContent = ({ game }: { game: Game }) => {
  return (
    <>
      <Image
        width="full"
        height="600px"
        objectFit="cover"
        mt="1rem"
        src={game?.backgroundImage}
        objectPosition="top"
      />
      <chakra.p
        fontFamily={fonts.nav}
        color="black"
        px="2rem"
        mt="1rem"
        mb="2rem"
      >
        {game?.description
          ? game.description
          : "Game doesn't have a description."}
      </chakra.p>
    </>
  );
};

export default GameContent;
