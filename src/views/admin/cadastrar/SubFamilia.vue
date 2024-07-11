<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Sub-familia</span> <span v-else>Cadastrar Sub-familia</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaSub">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputSub-familia" class="form-label">Tipo</label>
              <input v-model="state.subFamilia.tipo" type="text" id="inputSub-familia" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span v-else>Cadastrar</span></button>
            <router-link to="/admin/Sub-familias" class="btn btn-danger">Cancelar</router-link>"
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
   subFamilia: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getSubfamilia(state.id);
  }
})

async function getSubfamilia(id) {
  try {
    const { data } = await services.subFamilia.getById(id);
    state.subFamilia = data;
  } catch (error) {
    console.error("Erro ao buscar sub-familia:", error);
  }
}

async function novaSub() {
  if (state.id) {
    try {
      await services.subFamilia.update(state.id, state.subFamilia);
      router.push("/admin/sub-familias");
    } catch (error) {
      console.error("Erro ao alterar sub-familia:", error);
    }
  } else {
    try {
      await services.subFamilia.salvar(state.subFamilia.tipo);
      router.push("/admin/sub-familias");
    } catch (error) {
      console.error("Erro ao criar sub-familia:", error);
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