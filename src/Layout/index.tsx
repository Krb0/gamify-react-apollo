import { Box, chakra } from "@chakra-ui/react";
import Footer from "./Footbar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <chakra.main minHeight="88vh">{children}</chakra.main>
      <Footer />
    </Box>
  );
};

export default Layout;
