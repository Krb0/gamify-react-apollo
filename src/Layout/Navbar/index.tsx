import { Flex, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link as RouteLink } from "react-router-dom";
import { fonts } from "../../theme";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      bgColor="primary.500"
      paddingY="1rem"
      paddingX={{ base: "0.5rem", sm: "2.5rem" }}
      alignItems="center"
      justifyContent={{ base: "center", uxs: "space-between" }}
      color="white"
      flexWrap="wrap"
      fontFamily={fonts.nav}
    >
      <Link
        as={RouteLink}
        fontSize="2.2rem"
        fontWeight="semibold"
        to="/"
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        _focus={{ textDecoration: "none" }}
      >
        GAMIFY
      </Link>
      <Flex gap="1rem" fontSize="1.3rem">
        <Link
          as={RouteLink}
          fontWeight={
            pathname === "/" || pathname.startsWith("/game") ? "700" : "500"
          }
          to="/"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          _focus={{ textDecoration: "none" }}
        >
          Games
        </Link>
        <Link
          as={RouteLink}
          fontWeight={pathname === "/platforms" ? "700" : "500"}
          to="/platforms"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          _focus={{ textDecoration: "none" }}
        >
          Platforms
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
