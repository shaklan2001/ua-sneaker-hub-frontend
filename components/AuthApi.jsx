const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

const registerUser = (username, email, password) =>
  axiosClient.post("/auth/local/register", {
    username: username,
    email: email,
    password: password,
  });

const SignIn = (email, password) =>
  axiosClient.post("/auth/local", {
    identifier: email,
    password: password,
  });

export default {
  registerUser,
  SignIn,
};
