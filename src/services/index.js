import axios from "axios";
import dietaService from "./dieta";
import especieService from "./especie";
<<<<<<< HEAD
import dominioService from "./dominio";
import cladoService from "./clado";
import familiaService from "./familia";
=======
import cladoService from "./clado";
import dominioService from "./dominio";
import familiaService from "./familia";
import filoService from "./filo";
import generoService from "./genero";
import MetodosLocomocao from "./MetodosLocomocao";
import periodoService from "./periodo";
import SubFamiliaService from "./SubFamilia";
import userService from "./user";
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447

const API_URL = "http://localhost:8070";

const httpClient = axios.create({
  baseURL: API_URL,
});

export default {
  dieta: dietaService(httpClient),
  especie: especieService(httpClient),
<<<<<<< HEAD
  dominio: dominioService(httpClient),
  clado: cladoService(httpClient),
  familia: familiaService(httpClient),
=======
  clado: cladoService(httpClient),
  dominio: dominioService(httpClient),
  familia: familiaService(httpClient),
  filo: filoService(httpClient),
  genero: generoService(httpClient),
  MetodosLocomocao: MetodosLocomocao (httpClient),
  periodo: periodoService(httpClient),
  SubFamilia: SubFamiliaService(httpClient),
  user: userService(httpClient)
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
}