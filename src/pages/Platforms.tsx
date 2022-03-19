import { Flex } from "@chakra-ui/react";
import Loader from "../components/Loader";
import PlatformList from "../components/Platforms/PlatformList";
import usePlatforms from "../hooks/usePlatforms";

const Platforms = () => {
  const { data, loading } = usePlatforms();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Flex
          gap="2rem"
          flexWrap="wrap"
          justifyContent="center"
          marginTop="3rem"
          paddingX="2.5rem"
        >
          <PlatformList platforms={data!.platforms} />
        </Flex>
      )}
    </>
  );
};

export default Platforms;
