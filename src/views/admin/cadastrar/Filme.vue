<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Filme</span> <span v-else>Cadastrar Filme</span>
            </h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoFilme">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputFilme" class="form-label">Nome</label>
              <input v-model="state.filme.nome" type="text" id="inputFilme" required>
            </div>
            <div class="col-sm-6">
              <label for="inputFilme" class="form-label">Data de Lançamento</label>
              <input v-model="state.filme.dtl" type="text" v-mask-date.br id="text" required>
            </div>
            <div class="col-sm-6">
              <label for="inputFilme" class="form-label">Sinopse</label>
              <input v-model="state.filme.sinopse" type="text" id="inputFilme" required>
            </div>
            <div class="col-sm-6">
              <label for="inputFilme" class="form-label">Genero</label>
              <input v-model="state.filme.genero" type="text" id="inputFilme" required>
            </div>
            <div class="col-sm-6">
              <label for="inputFilme" class="form-label">Urn</label>
              <input v-model="state.filme.urn" type="text" id="inputFilme" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span
                v-else>Cadastrar</span></button>
            <router-link to="/admin/filmes" class="btn btn-danger">Cancelar</router-link>"
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import services from "@/services";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  id: "",
  filme: {
    nome: "",
    sinopse: "",
    genero: "",
    dtl: "",
    urn: ""
  },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getFilme(state.id);
  }
})

async function getFilme(id) {
  try {
    const { data } = await services.filme.getById(id);
    state.filme = data;
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
  }
}

async function novoFilme() {
  if (state.id) {
    try {
      await services.filme.update(state.id, state.filme);
      router.push("/admin/filmes");
    } catch (error) {
      console.error("Erro ao alterar filme:", error);
    }
  } else {
    try {
      await services.filme.salvar({
      nome: state.filme.nome, 
      sinopse: state.filme.sinopse, 
      dtl: state.filme.dtl, 
      urn: state.filme.urn, 
      genero: state.filme.genero});
      router.push("/admin/filmes");
    } catch (error) {
      console.error("Erro ao criar filme:", error);
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