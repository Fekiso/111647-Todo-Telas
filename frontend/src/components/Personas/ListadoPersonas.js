import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Formik } from "formik";

import { TableContainer, Tooltip } from "@mui/material";
import { Done, DoNotDisturbAlt,BorderColor,PersonRemove } from "@mui/icons-material";

import Button from "../CommonComponents/Button.js";
import { DataTable } from "../CommonComponents/DataTable";
import ModalRegistrarPersona from "./frmAlta.js";
import ModalModificarPersona from "./frmEditar.js";
import ModalDarBajaPersona from "./frmDarBaja.js";


const config = { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } };

function Default() {
  const [personas, setPersonas] = useState([]);
  const [frmAlta, setFrmAlta] = useState(true);
  const [frmModificar, setFrmModificar] = useState(true);
  const [frmDarBaja, setFrmDarBaja] = useState(true);

  const TraerPersonas = async () => {
    await axios
      .get(`http://localhost:3080/api/personas`, config)
      .then((res) => {
        setPersonas(res.data);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
        return e;
      });
  };

  const AbrirCerrarModalDarAlta = () => {
    setFrmAlta(!frmAlta);
  };

  const AbrirCerrarModalModificar = () => {
    setFrmModificar(!frmModificar);
  };

  const AbrirCerrarModalDarDeBaja = () => {
    setFrmDarBaja(!frmDarBaja);
  };

  useEffect(() => {
    TraerPersonas();
  }, []);

  const columns = [
    {
      name: "idPersona",
      label: "Id",
      options: { display: false, sort: false, download: false, searchable: false },
    },
    {
      name: "habilitado",
      label: "ESTADO",
      options: {
        sort: false,
        print: false,
        download: false,
        searchable: false,
        customBodyRender: (value) => {
          if (value)
            return (
              <Tooltip title="Habilitado para transacciones">
                <Done color="primary" />
              </Tooltip>
            );
          else
            return (
              <Tooltip title="Desabilitado para transacciones">
                <DoNotDisturbAlt color="error" />
              </Tooltip>
            );
        },
      },
    },
    {
      name: "nroDocumento",
      label: "NRO DOCUMENTO",
      options: {
        sort: false,
      },
    },
    {
      name: "tipoDoc",
      label: "TIPO DOCUMENTO",
      options: {
        sort: true,
      },
    },
    {
      name: "apellido",
      label: "APELLIDO",
      options: {
        sort: true,
      },
    },
    {
      name: "nombre",
      label: "NOMBRE",
      options: {
        sort: false,
      },
    },
    {
      name: "telefono",
      label: "TELEFONO",
      options: {
        sort: false,
      },
    },
    {
      name: "correo",
      label: "CORREO",
      options: {
        sort: false,
      },
    },
    {
      name: "acciones",
      label: "ACCIONES",
      options: {
        sort: false,
        print: false,
        download: false,
        searchable: false,
        customBodyRender: (value) => {
            return (
              <>
                <Tooltip title="Editar">
                  <Button className="amarillo"><BorderColor/></Button>
                </Tooltip>
                <Tooltip title="Dar de baja">
                  <Button className='rojo'><PersonRemove/></Button>
                </Tooltip>
              </>
            );
        },
      },
    },
  ];

  const CargarFilas = () => {
    const rows = [];
    personas.map((persona, i) =>
      rows.push({
        idPersona: persona.idPersona,
        habilitado: persona.habilitado,
        nroDocumento: persona.nroDocumento,
        tipoDoc: persona.TiposDoc.tipoDoc,
        apellido: persona.apellido,
        nombre: persona.nombre,
        telefono: persona.telefono,
        correo: persona.correo,
      })
    );
    return rows;
  };

  const options = {
    selectableRows: false,
    filter: false,
    print: false,
    downloadOptions: { filename: `Listado clientes` },
    tableBodyHeight: "auto",
  };
  return (
    <>
    <Button>Dar de alta una nueva persona</Button>
      <TableContainer>
        <DataTable title={"Clientes"} columns={columns} data={CargarFilas()} options={options} />
      </TableContainer>
      <ModalRegistrarPersona open={frmAlta} onClose={AbrirCerrarModalDarAlta}/>
      <ModalDarBajaPersona open={frmDarBaja} onClose={AbrirCerrarModalDarDeBaja}/>
      <ModalModificarPersona open={frmModificar} onClose={AbrirCerrarModalModificar}/>
    </>
  );
}

export default Default;
