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
        <form @submit.prevent="novaDieta">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-2">
              <label for="nome" class="form-label">Nome</label>
              <input type="text" id="nome" required v-model="state.dino.nome">
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
              <input type="text" id="dieta" required v-model="state.dino.dieta_principal">
            </div>
            <div class="col-sm-2">
              <label for="nature" class="form-label">Habitat Natural</label>
              <input type="text" id="nature" required v-model="state.dino.habitat_natural">
            </div>
            <div class="col-sm-2">
              <label for="presa" class="form-label">Presa/Predador</label>
              <select class="form-label" v-model="state.dino.presa_predador">
                <option value="PRESA">Presa</option>
                <option value="PREDADIR">Predador</option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="dieta" class="form-label">Dieta</label>
              <select class="form-label" v-model="state.dino.dieta_id">
                <option v-for="dieta in state.dietas" :key="dieta.id" :value="dieta.id">{{ dieta.tipo }}</option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="periodo" class="form-label">Período</label>
              <select id="periodo" class="form-label" v-model="state.dino.periodo_id">
                <option v-for="periodo in state.periodos" :key="periodo.id" :value="periodo.id">{{ periodo.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="dominio" class="form-label">Dominío</label>
              <select id="dominio" class="form-label" v-model="state.dino.dominio_id">
                <option v-for="dominio in state.dominios" :key="dominio.id" :value="dominio.id">{{ dominio.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="reino" class="form-label">Reino</label>
              <select id="reino" class="form-label" v-model="state.dino.reino_id">
                <option v-for="reino in state.reinos" :key="reino.id" :value="reino.id">{{ reino.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="filo" class="form-label">Filo</label>
              <select id="filo" class="form-label" v-model="state.dino.filo_id">
                <option v-for="filo in state.filos" :key="filo.id" :value="filo.id">{{ filo.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="clado" class="form-label">Clado</label>
              <select id="clado" class="form-label" v-model="state.dino.clado_id">
                <option v-for="clado in state.clados" :key="clado.id" :value="clado.id">{{ clado.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="familia" class="form-label">Família</label>
              <select id="familia" class="form-label" v-model="state.dino.familia_id">
                <option v-for="familia in state.familias" :key="familia.id" :value="familia.id">{{ familia.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="sub" class="form-label">SubFamília</label>
              <select id="sub" class="form-label" v-model="state.dino.sub_familia_id">
                <option v-for="sub in state.subFamilias" :key="sub.id" :value="sub.id">{{ sub.tipo }}
                </option>
              </select>
            </div>

            <div class="col-sm-2">
              <label for="generos" class="form-label">Gênero</label>
              <select id="generos" class="form-label" v-model="state.dino.genero_id">
                <option v-for="genero in state.generos" :key="genero.id" :value="genero.id">{{ genero.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-2">
              <label for="especie" class="form-label">Espécie</label>
              <select id="especie" class="form-label" v-model="state.dino.especie_id">
                <option v-for="especie in state.especies" :key="especie.id" :value="especie.id">{{ especie.tipo }}
                </option>
              </select>
            </div>
            <div class="col-sm-3">
              <label for="loco" class="form-label">Método de Locomoção</label>
              <select id="loco" class="form-label" v-model="state.dino.metodo_id">
                <option v-for="metodo in state.metodos" :key="metodo.id" :value="metodo.id">{{ metodo.tipo }}
                </option>
              </select>
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
    tamanho: "",
    peso: "",
    dieta_principal: "",
    habitat_natural: "",
    presa_predador: "",
    dieta_id: "",
    periodo_id: "",
    dominio_id: "",
    reino_id: "",
    filo_id: "",
    clado_id: "",
    familia_id: "",
    metodo_id: "",
    sub_familia_id: "",
    genero_id: "",
    especie_id: "",
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
  } catch (error) {
    console.error("Erro ao buscar dino:", error);
  }
}

//Gets de campos de chaves estrangeiras
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

async function novaDieta() {
  if (state.id) {
    try {
      await services.dieta.update(state.id, state.dieta);
      router.push("/admin/dietas");
    } catch (error) {
      console.error("Erro ao alterar dieta:", error);
    }
  } else {
    try {
      await services.dieta.salvar(state.dieta.tipo);
      router.push("/admin/dietas");
    } catch (error) {
      console.error("Erro ao criar dieta:", error);
    }
  }

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
</style>