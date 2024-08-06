<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Dino</span> <span v-else>Cadastrar Dino</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoDino">
          <div class="row">
            <div class="col-sm-2" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-2">
              <label for="nome" class="form-label">Nome</label>
              <input type="text" id="nome" required v-model="state.dino.nome">
            </div>
            <div class="col-sm-2">
              <label for="urn" class="form-label">Urn</label>
              <input type="text" id="urn" required v-model="state.dino.urn">
            </div>
            <div class="col-sm-2">
              <label for="tamn" class="form-label">Tamanho</label>
              <input type="text" id="tamn" required v-model="state.dino.tamanho">
            </div>
            <div class="col-sm-2">
              <label for="peso" class="form-label">Peso</label>
              <input type="text" id="peso" required v-model="state.dino.peso">
            </div>
            <div class="col-sm-2">
              <label for="dieta" class="form-label">Dieta Principal</label>
              <input type="text" id="dieta" required v-model="state.dino.dietaPrincipal">
            </div>
            <div class="col-sm-2">
              <label for="nature" class="form-label">Habitat Natural</label>
              <input type="text" id="nature" required v-model="state.dino.habitatNatural">
            </div>
            <div class="col-sm-2">
              <label for="dieta" class="form-label">Dieta</label>
              <select class="form-label" v-model="state.dino.dietaId">
                <option v-for="dieta in state.dietas" :key="dieta.id" :value="dieta.id">{{ dieta.tipo }}</option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="periodo" class="form-label">Período</label>
              <select id="periodo" class="form-label" v-model="state.dino.periodoId">
                <option v-for="periodo in state.periodos" :key="periodo.id" :value="periodo.id">{{ periodo.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="dominio" class="form-label">Dominío</label>
              <select id="dominio" class="form-label" v-model="state.dino.dominioId">
                <option v-for="dominio in state.dominios" :key="dominio.id" :value="dominio.id">{{ dominio.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="reino" class="form-label">Reino</label>
              <select id="reino" class="form-label" v-model="state.dino.reinoId">
                <option v-for="reino in state.reinos" :key="reino.id" :value="reino.id">{{ reino.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="filo" class="form-label">Filo</label>
              <select id="filo" class="form-label" v-model="state.dino.filoId">
                <option v-for="filo in state.filos" :key="filo.id" :value="filo.id">{{ filo.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="clado" class="form-label">Clado</label>
              <select id="clado" class="form-label" v-model="state.dino.cladoId">
                <option v-for="clado in state.clados" :key="clado.id" :value="clado.id">{{ clado.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="familia" class="form-label">Família</label>
              <select id="familia" class="form-label" v-model="state.dino.familiaId">
                <option v-for="familia in state.familias" :key="familia.id" :value="familia.id">{{ familia.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="sub" class="form-label">SubFamília</label>
              <select id="sub" class="form-label" v-model="state.dino.subFamiliaId">
                <option v-for="sub in state.subFamilias" :key="sub.id" :value="sub.id">{{ sub.tipo }}
                </option>
              </select>
            </div>

            <div class="col-sm-2">
              <label for="generos" class="form-label">Gênero</label>
              <select id="generos" class="form-label" v-model="state.dino.generoId">
                <option v-for="genero in state.generos" :key="genero.id" :value="genero.id">{{ genero.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="especie" class="form-label">Espécie</label>
              <select id="especie" class="form-label" v-model="state.dino.especieId">
                <option v-for="especie in state.especies" :key="especie.id" :value="especie.id">{{ especie.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-3">
              <label for="loco" class="form-label">Método de Locomoção</label>
              <select id="loco" class="form-label" v-model="state.dino.metodoLocomocaoId">
                <option v-for="metodo in state.metodos" :key="metodo.id" :value="metodo.id">{{ metodo.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-3 mt-4">
              <label for="IMG" class="form-label styled-file-label">Adicionar imagem <br /> <i
                  class="bi bi-images"></i></label>
              <input id="IMG" type="file" class="form-file-input" multiple @change="addImage" />
            </div>
            <div class="col-sm-12">
              <label for="info" class="form-label">Info Card</label>
              <input type="text" id="info" required v-model="state.dino.infoCard">
            </div>
            <div class="col-md-12" v-if="state.images.length > 0">
              <div class="row">
                <div class="col-md-2" v-for="(objImage, index) in state.images" :key="index" style="display: flex">
                  <img :src="objImage.imageUrl" class="image" alt="Dino Image" />
                  <div class="div_btn_x mt-4">
                    <button class="remove_image" @click="removeImage(index)">
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">
              <span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span>
            </button>
            <router-link to="/admin/dinossauros" class="btn btn-danger">Cancelar</router-link>"
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import services from "@/services";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  id: "",
  dino: {
    nome: "",
    urn: "",
    tamanho: "",
    peso: "",
    dietaPrincipal: "",
    habitatNatural: "",
    infoCard: "",
    dietaId: "",
    periodoId: "",
    dominioId: "",
    reinoId: "",
    filoId: "",
    cladoId: "",
    familiaId: "",
    metodoLocomocaoId: "",
    subFamiliaId: "",
    generoId: "",
    especieId: "",
  },

  //Campos estrangeiros
  dietas: [],
  periodos: [],
  dominios: [],
  reinos: [],
  filos: [],
  clados: [],
  familias: [],
  metodos: [],
  subFamilias: [],
  generos: [],
  especies: [],

  //images
  image: {},
  images: [],
  images_delete: [],
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getDinoId(state.id);
  }
  getCampos();
})

//Buscar dino Id caso for um update
async function getDinoId(id) {
  try {
    const { data } = await services.dino.getById(id);
    state.dino = data;
    state.images = data.images
  } catch (error) {
    console.error("Erro ao buscar dino:", error);
  }
}

async function getCampos() {
  try {
    const { data } = await services.dieta.getAll();
    state.dietas = data;
  } catch (error) {
    console.error('Erro ao buscar dietas:', error);
  }
  try {
    const { data } = await services.periodo.getAll();
    state.periodos = data;
  } catch (error) {
    console.error('Erro ao buscar os periodos:', error);
  }
  try {
    const { data } = await services.dominio.getAll();
    state.dominios = data;
  } catch (error) {
    console.error('Erro ao buscar os dominios:', error);
  }
  try {
    const { data } = await services.reino.getAll();
    state.reinos = data;
  } catch (error) {
    console.error('Erro ao buscar os reinos:', error);
  }
  try {
    const { data } = await services.filo.getAll();
    state.filos = data;
  } catch (error) {
    console.error('Erro ao buscar os filos:', error);
  }
  try {
    const { data } = await services.clado.getAll();
    state.clados = data;
  } catch (error) {
    console.error('Erro ao buscar clados:', error);
  }
  try {
    const { data } = await services.familia.getAll();
    state.familias = data;
  } catch (error) {
    console.error('Erro ao buscar as familias:', error);
  }
  try {
    const { data } = await services.metodoLocomocao.getAll();
    state.metodos = data;
  } catch (error) {
    console.error('Erro ao buscar os metodos de locomoção:', error);
  }
  try {
    const { data } = await services.subFamilia.getAll();
    state.subFamilias = data;
  } catch (error) {
    console.error('Erro ao buscar as sub-familias:', error);
  }
  try {
    const { data } = await services.genero.getAll();
    state.generos = data;
  } catch (error) {
    console.error('Erro ao buscar os generos:', error);
  }
  try {
    const { data } = await services.especie.getAll();
    state.especies = data;
  } catch (error) {
    console.error("Erro ao buscar especie:", error);
  }
}

async function novoDino() {
  if (state.id) {
    try {
      await services.dino.update(state.id, state.dino);
      router.push("/admin/dinossauros");
    } catch (error) {
      console.error("Erro ao alterar dinossauro:", error);
    }
  } else {
    try {
      const { data } = await services.dino.salvar(state.dino);
      console.log(data);
      const dino_id = data.id;
      for (let index = 0; index < state.images.length; index++) {
        const formData = new FormData();
        formData.append("dinossauroId", dino_id);
        formData.append("file", state.images[index].file);
        await services.dino.saveImage(formData);
      }
      router.push("/admin/dinossauros");
    } catch (error) {
      console.error("Erro ao salvar dinossauro e imagens:", error);
    }
  }
}


function addImage(event) {
  for (let index = 0; index < event.target.files.length; index++) {
    const element = event.target.files[index];
    var objImage = new Object();
    objImage.id = index + 1;
    objImage.file = element;
    objImage.imageUrl = URL.createObjectURL(element);
    state.images.push(objImage);
    console.log(objImage);
  }
}

async function removeImage(index_image) {
  if (state.images[index_image].id != undefined) {
    state.images_delete.push(state.images[index_image].id);
  }
  state.images.splice(index_image, 1);
  document.querySelector('input[type="file"]').value = null;
}

</script>

<style scoped>
a {
  text-decoration: none;
}

main {
  margin: 100px 10px 10px 10px;
}

.card {
  background: #212121;
  border-radius: 10px 10px 10px 10px;
}

.card h5 {
  color: #0f5;
}

.card-img-bottom {
  border-radius: 0;
}

.image {
  width: 100%;
  object-fit: contain;
  margin-top: 1em;
  height: 200px;
}

.remove_image {
  border: none;
  outline: none;
  background-color: #dc3545;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #733434;
}

.remove_image:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #733434;
}

.div_btn_x {
  margin-left: 10px;
}

.form-file-input {
  display: none;
}

.styled-file-label {
  display: inline-block;
  width: 100%;
  background-color: transparent;
  color: #0f5;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  border: 1px solid #0f5;

}

.styled-file-label:hover {
  border: 1px solid #fff;
  color: #fff;
}

.styled-file-label:active {
  border: 1px solid #fff;
  color: #fff;
}
</style>