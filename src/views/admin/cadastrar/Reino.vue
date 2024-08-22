<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Reino</span> <span v-else>Cadastrar Reino</span></h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoReino">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputReino" class="form-label">Tipo</label>
              <input v-model="state.reino.tipo" type="text" placeholder="Reino do dinossauro:" id="inputReino" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span><span
                v-else>Cadastrar</span></button>
            <router-link to="/admin/Reinos" class="btn btn-danger">Cancelar</router-link>"
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
  reino: { tipo: "", },
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
      router.push("/admin/reinos");
    } catch (error) {
      console.error("Erro ao alterar reino:", error);
    }
  } else {
    try {
      await services.reino.salvar({ tipo: state.reino.tipo });
      router.push("/admin/reinos");
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