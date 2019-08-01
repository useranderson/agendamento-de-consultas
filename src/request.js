import axios from "axios";

const request = axios.create({
  baseURL: "https://api-agendamento-de-consultas.herokuapp.com/"
});

export default request;
