<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Novo reino</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoReino">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputReino" class="form-label">Tipo</label>
              <input v-model="state.reino.tipo" type="text" id="inputReino" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/reinos" class="btn btn-danger">Cancelar</router-link>"
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
   reino: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getReino(state.id);
  }
})

async function getReino(id) {
  try {
    const { data } = await services.reino.getById(id);
    state.reino = data;
  } catch (error) {
    console.error("Erro ao buscar reino:", error);
  }
}

async function novoReino() {
  if (state.id) {
    try {
      await services.reino.update(state.id, state.reino);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao alterar reino:", error);
    }
  } else {
    try {
      await services.reino.salvar(state.reino.tipo);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao criar reino:", error);
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