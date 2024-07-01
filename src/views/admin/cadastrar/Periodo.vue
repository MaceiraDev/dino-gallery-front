<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Periodo</span> <span v-else>Cadastrar Periodo</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoPeriodo">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputPeriodo" class="form-label">Tipo</label>
              <input v-model="state.periodo.tipo" type="text" id="inputPeriodo" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span></button>
            <router-link to="/admin/Periodos" class="btn btn-danger">Cancelar</router-link>"
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
   periodo: { tipo: "" },
});


onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getPeriodo(state.id);
  }
})

async function getPeriodo(id) {
  try {
    const { data } = await services.periodo.getById(id);
    state.periodo = data;
  } catch (error) {
    console.error("Erro ao buscar periodo:", error);
  }
}

async function novoPeriodo() {
  if (state.id) {
    try {
      await services.periodo.update(state.id, state.periodo);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao alterar periodo:", error);
    }
  } else {
    try {
      await services.periodo.salvar(state.periodo.tipo);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao criar periodo:", error);
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