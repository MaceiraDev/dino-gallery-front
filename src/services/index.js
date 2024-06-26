import axios from "axios";
import dietaService from "./dieta";
import especieService from "./especie";
import dominioService from "./dominio";
import cladoService from "./clado";
import familiaService from "./familia";
import subFamiliaService from "./subFamilia";
import metodoLocomocaoService from "./metodoLocomocao";
import filoService from "./filo";
import generoService from "./genero";
import userService from "./user";
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
  filo: filoService(httpClient),
  genero: generoService(httpClient),
  metodoLocomocao: metodoLocomocaoService(httpClient),
  user: userService(httpClient)
}