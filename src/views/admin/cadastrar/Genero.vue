<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Novo Género</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoGenero">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputGenero" class="form-label">Tipo</label>
              <input v-model="state.genero.tipo" type="text" id="inputGenero" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/generos" class="btn btn-danger">Cancelar</router-link>"
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import services from "@/services";
import { reactive } from "vue";
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
    const { data } = await services.filo.getById(id);
    state.filo = data;
  } catch (error) {
    console.error("Erro ao buscar filo:", error);
  }
}

async function novoGenero() {
  if (state.id) {
    try {
      await services.filo.update(state.id, state.filo);
      router.push("/admin/filos");
    } catch (error) {
      console.error("Erro ao alterar filo:", error);
    }
  } else {
    try {
      await services.filo.salvar(state.filo.tipo);
      router.push("/admin/filos");
    } catch (error) {
      console.error("Erro ao criar filo:", error);
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