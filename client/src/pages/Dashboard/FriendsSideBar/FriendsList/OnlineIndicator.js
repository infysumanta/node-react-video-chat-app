import React from "react";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/system";
const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecord />
    </Box>
  );
};

export default OnlineIndicator;
