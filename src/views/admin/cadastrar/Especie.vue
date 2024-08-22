<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Espécie</span> <span v-else>Cadastrar Espécie</span>
            </h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaEpecie">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputEspecie" class="form-label">Tipo</label>
              <input v-model="state.especie.tipo" type="text"  placeholder="Especie do dinossauro:" id="inputEspecie" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span
                v-else>Cadastrar</span></button>
            <router-link to="/admin/especies" class="btn btn-danger">Cancelar</router-link>"
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
  especie: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getEspecie(state.id);
  }
})

async function getEspecie(id) {
  try {
    const { data } = await services.especie.getById(id);
    state.especie = data;
  } catch (error) {
    console.error("Erro ao buscar especie:", error);
  }
}

async function novaEpecie() {
  if (state.id) {
    try {
      await services.especie.update(state.id, state.especie);
      router.push("/admin/especies");
    } catch (error) {
      console.error("Erro ao alterar especie:", error);
    }
  } else {
    try {
      await services.especie.salvar(state.especie.tipo);
      router.push("/admin/especies");
    } catch (error) {
      console.error("Erro ao criar especie:", error);
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