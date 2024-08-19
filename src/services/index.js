import axios from "axios";
import dietaService from "./dieta";
import especieService from "./especie";
import dominioService from "./dominio";
import cladoService from "./clado";
import familiaService from "./familia";
import subFamiliaService from "./subFamilia";
import metodoLocomocaoService from "./metodoLocomocao";
import mezozoicoService from "./mezozoico";
import filoService from "./filo";
import periodoService from "./periodo";
import generoService from "./genero";
import reinoService from "./reino";
import userService from "./user";
import perguntasService from "./perguntas";
import filmeService from "./filme";
import dinoService from './dino'

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
  mezozoico: mezozoicoService(httpClient),
  periodo: periodoService(httpClient),
  reino: reinoService(httpClient),
  user: userService(httpClient),
  perguntas: perguntasService(httpClient),
  filme: filmeService(httpClient),
  dino: dinoService(httpClient),
}