import { Grid } from "@mui/material";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  background-color: #ff9707;
  width: 100%;
`;
const LoginDecoration = () => {
  return <StyledGrid xs={0} md={2.5} direction="column" alignItems="center" />;
};

export default LoginDecoration;
