import useGame from "../../hooks/useGame";
import { Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import GameHeader from "../../components/Game/GameHeader";
import GameContent from "../../components/Game/GameContent";

const NewGamePage = () => {
  const params = useParams();
  const id = parseInt(params.id ? params.id : "1");
  const { data, loading } = useGame(id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Stack
          mx={{ base: "0", lg: "10rem" }}
          mt="2rem"
          color="#444"
          fontSize="1.4rem"
        >
          <GameHeader game={data!.game} />
          <GameContent game={data!.game} />
        </Stack>
      )}
    </>
  );
};

export default NewGamePage;
