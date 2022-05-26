import { Link, Route, Routes } from "react-router-dom";
import {
  Dialog,
  Typography,
  Grid,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "./components/CommonComponents/Button.js";
import Container from "./components/CommonComponents/Container.js";
import Navbar from "./components/CommonComponents/Navbar.js";
import styled from "styled-components";
import Login from "./components/login/Login.js";
import ListadoPersonas from "./components/Personas/ListadoPersonas.js";
import { logout } from "./services/login.js";

const StyledGrid = styled(Grid)`
  height: 100vh;
  &.notLoged:{    
    align-content: center !important; 
    justify-content: center !important;
  }
}
`;
const StyledDialogActions = styled(DialogActions)`
  align-content: center !important;
  justify-content: center !important;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;

function App() {
  return (
    <>
      {!sessionStorage.getItem("token") && !sessionStorage.getItem("usuario") ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : sessionStorage.getItem("token") && sessionStorage.getItem("usuario") ? (
        <StyledGrid container>
          <Navbar />
          <Container rowSpacing={2}>
            <Routes>
              <Route path="/Listado/Productos" element={<Login />} />
              <Route path="/Listado/Clientes" element={<Login />} />
              <Route path="/Listado/Proveedores" element={<Login />} />
              <Route path="/Listado/Usuarios" element={<Login />} />

              <Route path="/Movimientos/Listado" element={<Login />} />
              <Route path="/Movimientos/Nuevo" element={<Login />} />

              <Route path="/Facturas/Listado" element={<Login />} />
              <Route path="/Facturas/Nuevo" element={<Login />} />

              <Route path="/Compras/Listado" element={<Login />} />
              <Route path="/Compras/Nuevo" element={<Login />} />

              <Route path="/Reportes" element={<Login />} />
              <Route path="/" element={<ListadoPersonas />} />
            </Routes>
          </Container>
        </StyledGrid>
      ) : (
        <StyledGrid container className="notLoged">
          <Dialog open>
            <DialogTitle>
              <Typography variant="h6">No se encuentra logueado:</Typography>
            </DialogTitle>
            <DialogContent>
              <Typography>
                No se encontro una sesion iniciada en el sistema o la misma expiro por favor intente
                logueese nuevamente
              </Typography>
            </DialogContent>
            <StyledDialogActions>
              <Link to="/" onClick={(e) => logout()}>
                <StyledButton>Redirigirse al login</StyledButton>
              </Link>
            </StyledDialogActions>
          </Dialog>
        </StyledGrid>
      )}
    </>
  );
}

export default App;
