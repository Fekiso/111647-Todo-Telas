import styled from "styled-components";
import { Button, Box } from "@mui/material";

const StyledButton = styled(Button)`
  width: 50%;
  color: #fff;
  padding: none;
  &.rojo {
    background-color: #b2163a;
  }
  &.rojo:hover {
    background-color: #85102b;
  }
  &.amarillo {
    background-color: #ff9707;
  }
  &.amarillo:hover {
    background-color: #d27900;
  }
`;

const StyledBox = styled(Box)`
  margin: 10px;
  justify-content: flex-end;
`;

const cButton = ({ ...props }) => {
  return (
    <StyledBox alignContent="center">
      <StyledButton {...props} variant="contained" />
    </StyledBox>
  );
};

export default cButton;
