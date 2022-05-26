import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  DialogContentText,
  TextField,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../CommonComponents/Button";

const useStyles = makeStyles({
  topScrollPaper: {
    alignItems: "flex-start",
  },
  topPaperScrollBody: {
    verticalAlign: "top",
  },
});

const snackbarEstado = (estado, mensaje, tipo) => {
  let snackbar = this.state.snackbar;
  snackbar.snackbarOpen = estado;
  snackbar.snackbarText = mensaje;
  switch (tipo) {
    case "Correcto":
      snackbar.snackbarColor = "success";
      break;
    case "Advertencia":
      snackbar.snackbarColor = "warning";
      break;
    case "Error":
      snackbar.snackbarColor = "error";
      break;
    case "Info":
      snackbar.snackbarColor = "info";
      break;
    default:
  }
  this.setState({ snackbar: snackbar });
};

const RegistrarPersona = () => {
  const classes = useStyles();

  const [tiposDocs, setTiposDocs] = useState([]);
  const [onClickModal, setOnClickModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [msjConfirmar, setMsjConfirmar] = useState(false);

  const CargarTiposDocs = () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:3080/api/tiposDocs`, config)
      .then((res) => {
        setTiposDocs(res.data);
      })
      .catch((e) => {
        console.log("Error", e.response);
        console.log(e.response);
      });
  };

  const ModificarPersona = (values) => {
    let registrarCliente = 0;
    const token = sessionStorage.getItem("token");

    let respuesta = "";
    let errorAxios = "";
    let blnErrorAxios = false;

    var config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(
        `http://localhost:3080/api/personas/${values.idPersona}`,
        {
          idTipoDoc: values.idTipoDoc,
          nroDocumento: values.nroDocumento,
          nombre: values.nombre,
          apellido: values.apellido,
          telefono: values.telefono,
        },
        config
      )
      .then(function (response) {
        registrarCliente = response.status;
        respuesta = response.statusText;
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
        errorAxios = error.response.data.message;
        blnErrorAxios = true;
      });

    if (!blnErrorAxios) {
      if (registrarCliente === 200) {
        if (respuesta === "OK") {
          snackbarEstado(true, "El paciente se modifico correctamente", "Correcto");
          setTimeout(this.CerrarModal, 1000);
        } else {
          snackbarEstado(true, respuesta, "Error");
        }
      } else {
        snackbarEstado(true, errorAxios, "Error");
      }
    } else {
      snackbarEstado(true, errorAxios, "Error");
    }
  };

  const AbrirModal = () => {
    setOnClickModal(true);
    setOpenModal(true);
  };

  const CerrarModal = () => {
    setOnClickModal(false);
    setOpenModal(false);
  };

  const AbrirmsjConfirmarCancelar = () => {
    setMsjConfirmar(true);
  };

  const CerrarmsjConfirmar = () => {
    setMsjConfirmar(false);
  };
  const CerrarmsjConfirmarCancelar = () => {
    setMsjConfirmar(false);
    CerrarModal();
  };

  const ConfirmarModificacion = (values) => {
    ModificarPersona(values);
    CerrarModal();
  };

  useEffect(() => {
    CargarTiposDocs();
    AbrirModal();
  }, []);

  return (
    <Grid fluid>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          nroDocumento: null,
          idTipoDoc: null,
          tiposDocs: CargarTiposDocs(),
          telefono: "",
          correo: "",
        }}
        handleSubmit={(values) => ConfirmarModificacion(values)}
      >
        {({ values, handleChange, handleSubmit, touched }) => (
          <form>
            <Dialog
              maxWidth="xs"
              open={openModal}
              onClose={(e) => CerrarModal()}
              fullWidth
              scroll="paper"
              classes={{
                scrollPaper: classes.topScrollPaper,
                paperScrollBody: classes.topPaperScrollBody,
              }}
            >
              <DialogTitle>
                <Typography variant="h6">Modificar datos de persona</Typography>
              </DialogTitle>
              <DialogContent>
                <TextField
                  id="apellido"
                  label="Apellido"
                  value={values.apellido}
                  margin="dense"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  required
                  onChange={handleChange}
                />

                <TextField
                  id="nombre"
                  label="Nombre"
                  value={values.nombre}
                  margin="dense"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  required
                  onChange={handleChange}
                />

                <TextField
                  select
                  label="TiposDoc"
                  id="cboTiposDoc"
                  onChange={handleChange}
                  value={values.idTipoDoc}
                  margin="dense"
                  fullWidth
                  variant="outlined"
                >
                  {tiposDocs !== null && tiposDocs.length > 0
                    ? tiposDocs.map((tipoDoc, i) => (
                        <MenuItem key={i} value={tipoDoc.idTipoDoc}>
                          {tipoDoc.tipoDoc}
                        </MenuItem>
                      ))
                    : null}
                </TextField>

                <TextField
                  id="nroDocumento"
                  label="Nro Documento"
                  value={values.nroDocumento}
                  type="number"
                  margin="dense"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  required
                  onChange={handleChange}
                />
                <TextField
                  id="telefono"
                  label="Telefono"
                  value={values.telefono}
                  type="tel"
                  margin="dense"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  required
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button className="Cancelar" onClick={(e) => AbrirmsjConfirmarCancelar()}>
                  Cerrar
                </Button>
                <Button className="Aceptar" onClick={(e) => ConfirmarModificacion()}>
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={msjConfirmar} onClose={(e) => CerrarmsjConfirmar()}>
              <DialogTitle>Modificar datos de la persona</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿Realmente desea modificar el registro del paciente?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className="Cancelar"
                  autoFocus
                  onClick={(e) => CerrarmsjConfirmarCancelar()}
                >
                  No
                </Button>
                <Button className="Aceptar" type="submit">
                  Si
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default RegistrarPersona;
