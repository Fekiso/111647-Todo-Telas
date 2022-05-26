import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Grid,
  DialogContentText,
} from "@mui/material";
import Button from "../CommonComponents/Button";


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

const DarBajaPersona = (values) => {
  const [onClickModal, setOnClickModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [msjConfirmar, setMsjConfirmar] = useState(false);

  const DarBaja = (values) => {
    let registrarCliente = 0;
    const token = sessionStorage.getItem("AppHCToken");
    const urlRest = localStorage.getItem("urlAxio");

    let respuesta = "";
    let errorAxios = "";
    let blnErrorAxios = false;

    var config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`http://localhost:3080/api/pacientes${values.idPersona}`, config)
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
          snackbarEstado(true, "La persona fue dada de baja correctamente", "Correcto");
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

  const ConfirmarRegistro = (values) => {
    DarBaja(values);
    CerrarModal();
  };

  useEffect(() => {
    AbrirModal();
  }, []);

  return (
    <Grid fluid>
      <Formik
        initialValues={{ idPersona: null, nombre: "", apellido: "" }}
        handleSubmit={(values) => ConfirmarRegistro(values)}
      >
        {({ values, handleChange, handleSubmit, touched }) => (
          <form>
            <Dialog //Mensaje confirmar cancelar dar de alta
              open={msjConfirmar}
              onClose={(e) => CerrarmsjConfirmar()}
            >
              <DialogTitle>Cancelar registro de paciente</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿Realmente desea a la persona {values.nombre} {values.apellido} ?.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className="Cancelar"
                  autoFocus
                  onClick={(e) => CerrarmsjConfirmarCancelar()}
                >
                  Si
                </Button>
                <Button className="Aceptar" type="submit">
                  No
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default DarBajaPersona;
