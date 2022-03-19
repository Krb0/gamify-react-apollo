import { useQuery } from "@apollo/client";
import { ALL_GAMES } from "../models/games/games.queries";

const useGames = () => {
  const { data, loading } = useQuery(ALL_GAMES);
  return { data, loading };
};

export default useGames;
