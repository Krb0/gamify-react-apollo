import { useQuery } from "@apollo/client";
import { UPCOMING_GAMES } from "../models/games/games.queries";

const useUpcoming = (limit?: number) => {
  const { data, loading } = useQuery(UPCOMING_GAMES, {
    variables: { limit },
  });
  return [data, loading];
};

export default useUpcoming;
