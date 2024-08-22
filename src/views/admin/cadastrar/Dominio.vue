<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Domínio</span> <span v-else>Cadastrar Domínio</span>
            </h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoDominio">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputDominio" class="form-label">Tipo</label>
              <input v-model="state.dominio.tipo" type="text"  placeholder="Dominio do dinossauro:" id="inputDominio" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span> <span
                v-else>Cadastrar</span></button>
            <router-link to="/admin/dominios" class="btn btn-danger">Cancelar</router-link>"
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
  dominio: { tipo: "" },
});

onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getDominio(state.id);
  }
})

async function getDominio(id) {
  try {
    const { data } = await services.dominio.getById(id);
    state.dominio = data;
  } catch (error) {
    console.error("Erro ao buscar dominio:", error);
  }
}

async function novoDominio() {
  if (state.id) {
    try {
      await services.dominio.update(state.id, state.dominio);
      router.push("/admin/dominios");
    } catch (error) {
      console.error("Erro ao alterar dominio:", error);
    }
  } else {
    try {
      await services.dominio.salvar(state.dominio.tipo);
      router.push("/admin/dominios");
    } catch (error) {
      console.error("Erro ao criar dominio:", error);
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