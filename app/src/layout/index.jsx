import React from "react";
import { Box } from "@mui/material";
import Tabs from "./tabs";

function Layout(props) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex" flex={1}>
        <Box display="flex" flexDirection="column">
          <Tabs />
        </Box>

        <Box display="flex" flex={1} justifyContent="flex-start" mx={8}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
export { Layout };
