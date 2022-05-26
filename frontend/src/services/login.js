import axios from "axios";

const initSession = async (user, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  await axios
    .get(`http://localhost:3080/api/Usuarios/${user}`, config)
    .then((res) => {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("usuario", user);
      sessionStorage.setItem("rol", res.data.idRol);
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
      return e;
    });
};

export const login = async (credentials) => {
  await axios
    .post(`http://localhost:3080/api/Login`, {
      legajo: credentials.legajo,
      pass: credentials.pass,
    })
    .then((res) => {
      initSession(res.data.user, res.data.token);
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
      return e;
    });
};

export const logout = async () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("usuario");
};
