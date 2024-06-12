import axios from "axios";
import dietaService from "./dieta";
import especieService from "./especie";
import dominioService from "./dominio";
import cladoService from "./clado";
import familiaService from "./familia";
import subFamiliaService from "./subFamilia";
import metodoLocomocao from "./metodoLocomocao";
import user from "./user";

const API_URL = "http://localhost:8070";

const httpClient = axios.create({
  baseURL: API_URL,
});

export default {
  dieta: dietaService(httpClient),
  especie: especieService(httpClient),
  dominio: dominioService(httpClient),
  clado: cladoService(httpClient),
  familia: familiaService(httpClient),
  subFamilia: subFamiliaService(httpClient),
  filo: filo(httpClient),
  genero: genero(httpClient),
  metodoLocomocao: metodoLocomocao(httpClient),
  user: user(httpClient)
}