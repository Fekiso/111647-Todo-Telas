import React from "react";
import { login } from "../../services/login.js";
import styled from "styled-components";
import { Formik } from "formik";

import LoginDecoration from "./LoginDecoration.js";
import Button from "../CommonComponents/Button.js";
import TextField from "../CommonComponents/TextField.js";
import { Grid, Typography } from "@mui/material";

const StyledContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const handleLogin = async (values) => {
    try {
      if (
        (values.legajo !== "" || values.legajo !== null || values.legejo !== undefined) &&
        (values.pass !== "" || values.pass !== null || values.pass !== undefined)
      ) {
        values.user = await login(values);
        values.legajo = "";
        values.pass = "";
      }
      values.error = "Faltan rellenar algunos campos";
    } catch (e) {
      values.error = "Credenciales invalidas";
    }
  };

  return (
    <>
      <LoginDecoration />
      <StyledContainer direction="row" maxWidth="xs">
        <Formik
          initialValues={{ legajo: "", pass: "", error: "", user: null }}
          onSubmit={(values) => {
            handleLogin(values);
          }}
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
