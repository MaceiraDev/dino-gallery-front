<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Genero</span> <span v-else>Cadastrar Genero</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoGenero">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputGenero" class="form-label">Tipo</label>
              <input v-model="state.genero.tipo" type="text" id="inputGenero" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span></button>
            <router-link to="/admin/generos" class="btn btn-danger">Cancelar</router-link>"
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
   genero: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getGenero(state.id);
  }
})

async function getGenero(id) {
  try {
    const { data } = await services.genero.getById(id);
    state.genero = data;
  } catch (error) {
    console.error("Erro ao buscar genero:", error);
  }
}

async function novoGenero() {
  if (state.id) {
    try {
      await services.genero.update(state.id, state.genero);
      router.push("/admin/generos");
    } catch (error) {
      console.error("Erro ao alterar genero:", error);
    }
  } else {
    try {
      await services.genero.salvar(state.genero.tipo);
      router.push("/admin/generos");
    } catch (error) {
      console.error("Erro ao criar genero:", error);
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