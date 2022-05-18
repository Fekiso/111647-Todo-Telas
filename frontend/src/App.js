import { Card, CardHeader, Grid } from "@mui/material";
import Container from "./components/Container.js";
import Navbar from "./components/Navbar.js";
import styled from "styled-components";
import CustomContainer from "./components/Container.js";

const StyledGrid = styled(Grid)`
  height: 100vh;
`;

function App() {
  return (
    <StyledGrid container spacing={2}>
      <Navbar/>
      <Container>
        <Card>
          <CardHeader title='Cargo la app'/>
        </Card>
      </Container>        
    </StyledGrid>
  );
}

export default App;
