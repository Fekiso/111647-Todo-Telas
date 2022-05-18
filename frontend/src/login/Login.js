import React from "react";
import LoginDecoration from "./LoginDecoration.js";

import Button from "../components/Button.js";
import TextField from "../components/TextField.js";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Formik } from "formik";

const StyledContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const validar = (values) => {
    if (
      values.legajo !== "" &&
      values.legajo !== null &&
      values.pass !== "" &&
      values.pass !== null
    ) {
      if (values.legajo === 123 && values.pass === "123") {
        values.error = "";
      } else {
        values.error = "Credenciales invalidas";
      }
    } else {
      values.error = "Alguna de las credeciales no fue rellenada.";
    }
  };

  const handleSubmit = (values) => {
    if (values.error !== "" && values.error !== null) {
    }
  };

  return (
    <>
      <LoginDecoration />
      <StyledContainer
        direction="row"
        maxWidth="xs"
      >
        <Formik
          initialValues={{ legajo: "", pass: "", error: "" }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validate={(values) => validar(values)}
        >
          {({ values, handleChange, handleSubmit, touched }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Legajo"
                name="legajo"
                type="number"
                value={values.legajo}
                onChange={handleChange}
              />
              <TextField
                label="Contraseña"
                name="pass"
                type="text"
                value={values.pass}
                onChange={handleChange}
              />
              {values.error !== "" ? (
                <Typography align="center" name="error" onChange={handleChange}>
                  {values.error}
                </Typography>
              ) : (
                <Typography>&nbsp;</Typography>
              )}
              <Button type="submit" size="large" fullWidth className="amarillo">
                Iniciar sesion
              </Button>
            </form>
          )}
        </Formik>
      </StyledContainer>
    </>
  );
}

export default Login;
