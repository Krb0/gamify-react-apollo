import { Flex, Stack, chakra, Image } from "@chakra-ui/react";
import { Game } from "../../../models/games/game.schema";
import GoldStar from "../../../assets/images/star-black.png";
import DarkStar from "../../../assets/images/star-gold.png";

const Info = ({ game }: { game: Game }) => {
  return (
    <>
      <Stack alignItems={{ base: "center", md: "flex-start" }}>
        <chakra.h2 fontWeight="bold" marginBottom="0.25rem">
          {game.name}
        </chakra.h2>
        <chakra.span fontWeight="regular" color="#666" fontSize="1.21rem">
          Rating: {game?.rating}
        </chakra.span>
        <Flex>
          {getRating(game?.rating ? game.rating : "0").map((bool) => (
            <Image
              src={bool ? GoldStar : DarkStar}
              h="24px"
              w="24px"
              objectFit="fill"
            />
          ))}
        </Flex>
      </Stack>
    </>
  );
};

export default Info;

const getRating = (string: string) => {
  const rating = Math.floor(parseInt(string));
  const arr: boolean[] = [];
  arr.length = 5;
  arr.fill(false);
  const ratedArr = arr.map((_, index) => (index < rating ? true : false));
  return ratedArr;
};
