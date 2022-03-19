import { Box, Image } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      position="absolute"
      top="50vh"
      left="50vw"
      textAlign="center"
      transform="translate(-50%,-50%)"
    >
      <Image
        src="https://cdn.shopify.com/s/files/1/0568/8419/9598/t/10/assets/loading.gif?v=12211448342275261349"
        w="90px"
        h="90px"
      />
    </Box>
  );
};

export default Loader;
