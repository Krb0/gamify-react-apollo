import React from "react";
import { Stack, chakra } from "@chakra-ui/react";
import { Platform } from "../../models/platforms/platform.schema";

const PlatformCard = ({ platform }: { platform: Platform }) => {
  return (
    <Stack
      alignItems="center"
      padding="0.5rem 1rem"
      minWidth="150px"
      flex="1"
      textAlign="center"
      border="1px solid rgba(0,0,0,0.07)"
      justifyContent="center"
      cursor="pointer"
      transition="0.25s"
      _hover={{
        bgColor: "#000",
        color: "#fff",
      }}
    >
      <chakra.p>{platform.name} </chakra.p>
    </Stack>
  );
};

export default PlatformCard;
