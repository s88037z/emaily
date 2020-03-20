import React from "react";
import MuiContainer from "@material-ui/core/Container";
import { styled } from "@material-ui/core";

const StyledContainer = styled(MuiContainer)({
  marginTop: 85
});

export default function Container({ children }: { children: JSX.Element }) {
  return <StyledContainer maxWidth="lg">{children}</StyledContainer>;
}
