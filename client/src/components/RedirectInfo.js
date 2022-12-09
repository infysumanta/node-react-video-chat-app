import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled("span")({
  color: "#00aff4",
  fontWeight: "400",
  cursor: "pointer",
  marginTop: "10px",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles && additionalStyles}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}> {redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
