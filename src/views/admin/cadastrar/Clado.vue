<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Clado</span> <span v-else>Cadastrar Clado</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoClado">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputClado" class="form-label">Tipo</label>
              <input v-model="state.clado.tipo" type="text" id="inputClado" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span></button>
            <router-link to="/admin/clados" class="btn btn-danger">Cancelar</router-link>"
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
   clado: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getClado(state.id);
  }
})

async function getClado(id) {
  try {
    const { data } = await services.clado.getById(id);
    state.clado = data;
  } catch (error) {
    console.error("Erro ao buscar clado:", error);
  }
}

async function novoClado() {
  if (state.id) {
    try {
      await services.clado.update(state.id, state.clado);
      router.push("/admin/clados");
    } catch (error) {
      console.error("Erro ao alterar clado:", error);
    }
  } else {
    try {
      await services.clado.salvar(state.clado.tipo);
      router.push("/admin/clados");
    } catch (error) {
      console.error("Erro ao criar clado:", error);
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