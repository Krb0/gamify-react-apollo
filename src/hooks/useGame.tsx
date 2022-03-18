import { useQuery } from "@apollo/client";
import { Game } from "../models/games/game.schema";
import { FIND_GAME } from "../models/games/games.queries";

interface Query {
  data?: {
    game: Game;
  };

  loading: boolean;
}

const useGame = (id: number) => {
  const { data, loading }: Query = useQuery(FIND_GAME, {
    variables: { id: id },
  });

  return { data, loading };
};

export default useGame;
