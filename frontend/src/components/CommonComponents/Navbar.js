import { Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import {logout} from '../../services/login.js'

const StyledGrid = styled(Grid)`
  display: flexbox;
  align-items: center;
  flex-direction: column;
  margin: 0 5px 0 0;
  border-rigth: 2px solid #ff9707;
`;

const StyledListItemButton = styled(ListItemButton)`
  &.Focus {
    backgound-color: #fdf4e8;
    color: #ff9707;
  }
`;

const StyledCollapse = styled(Collapse)`
  &.Focus {
    backgound-color: #fdf4e8;
    color: #ff9707;
  }
`;

const StyledCollapseListItem = styled(ListItemButton)``

const Navbar = (props) => {
  const [openCollapseListados, setOpenCollapseListados] = useState(false);
  const [openCollapseCompras, setOpenCollapseCompras] = useState(false);
  const [openCollapseVentas, setOpenCollapseVentas] = useState(false);
  const [openCollapseStock, setOpenCollapseStock] = useState(false);

  const handleClickMenuCmbNavBar = (values) => {
    switch (values) {
      case "Listado":
        setOpenCollapseListados(openCollapseListados ? false : true);
        setOpenCollapseStock(false);
        setOpenCollapseCompras(false);
        setOpenCollapseVentas(false);
        break;
      case "Stock":
        setOpenCollapseListados(false);
        setOpenCollapseStock(openCollapseStock ? false : true);
        setOpenCollapseCompras(false);
        setOpenCollapseVentas(false);
        break;
      case "Compras":
        setOpenCollapseListados(false);
        setOpenCollapseStock(false);
        setOpenCollapseCompras(openCollapseCompras ? false : true);
        setOpenCollapseVentas(false);
        break;
      case "Ventas":
        setOpenCollapseListados(false);
        setOpenCollapseStock(false);
        setOpenCollapseCompras(false);
        setOpenCollapseVentas(openCollapseVentas ? false : true);
        break;
      case "Reportes":
        setOpenCollapseListados(false);
        setOpenCollapseStock(false);
        setOpenCollapseCompras(false);
        setOpenCollapseVentas(false);
        break;
      case "Logout":
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <StyledGrid container xs={0} md={1.5}>
      <List component="nav">
        <StyledListItemButton
          className={openCollapseListados ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Listado")}
        >
          <ListItemText>Listados</ListItemText>
        </StyledListItemButton>
        <StyledCollapse in={openCollapseListados} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledCollapseListItem>
              <ListItemText>Clientes</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Productos</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Proveedores</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Usuarios</ListItemText>
            </StyledCollapseListItem>
          </List>
        </StyledCollapse>
        <StyledListItemButton
          className={openCollapseStock ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Stock")}
        >
          <ListItemText>Stocks</ListItemText>
        </StyledListItemButton>
        <StyledCollapse in={openCollapseStock} timeout="auto" unmountOnExit>
          <List Component="div" disablePadding>
            <StyledCollapseListItem>
              <ListItemText>Listados</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Nuevo movimientos</ListItemText>
            </StyledCollapseListItem>
          </List>
        </StyledCollapse>
        <StyledListItemButton
          className={openCollapseCompras ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Compras")}
        >
          <ListItemText>Compras</ListItemText>
        </StyledListItemButton>
        <StyledCollapse in={openCollapseCompras} timeout="auto" unmountOnExit>
          <List Component="div" disablePadding>
            <StyledCollapseListItem>
              <ListItemText>Listado</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Nueva compra</ListItemText>
            </StyledCollapseListItem>
          </List>
        </StyledCollapse>
        <StyledListItemButton
          className={openCollapseVentas ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Ventas")}
        >
          <ListItemText>Ventas</ListItemText>
        </StyledListItemButton>
        <StyledCollapse in={openCollapseVentas} timeout="auto" unmountOnExit>
          <List Component="div" disablePadding>
            <StyledCollapseListItem>
              <ListItemText>Listados</ListItemText>
            </StyledCollapseListItem>
            <StyledCollapseListItem>
              <ListItemText>Nueva venta</ListItemText>
            </StyledCollapseListItem>
          </List>
        </StyledCollapse>
        <StyledCollapseListItem
          className={!true ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Reportes")}
        >
          <ListItemText>Reportes</ListItemText>
        </StyledCollapseListItem>

        <StyledCollapseListItem
          className={!true ? "Focus" : ""}
          onClick={(e) => handleClickMenuCmbNavBar("Logout")}
        >
          <ListItemText>Cerrar sesion</ListItemText>
        </StyledCollapseListItem>
      </List>
    </StyledGrid>
  );
};

export default Navbar;
