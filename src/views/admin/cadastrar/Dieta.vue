<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Dieta</span> <span v-else>Cadastrar Dieta</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaDieta">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputDieta" class="form-label">Tipo</label>
              <input v-model="state.dieta.tipo" type="text" placeholder="Tipo de dieta:" id="inputDieta" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span></button>
            <router-link to="/admin/dietas" class="btn btn-danger">Cancelar</router-link>"
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
  dieta: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getDieta(state.id);
  }
})

async function getDieta(id) {
  try {
    const { data } = await services.dieta.getById(id);
    state.dieta = data;
  } catch (error) {
    console.error("Erro ao buscar dieta:", error);
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