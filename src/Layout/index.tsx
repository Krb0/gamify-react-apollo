import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <Box overflowX="hidden">
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
