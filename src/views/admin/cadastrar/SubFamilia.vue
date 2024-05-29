<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Nova Familia</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaSub">
          <div class="row">
            <div class="col-sm-1">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputFa" class="form-label">Tipo</label>
              <input v-model="state.subFamilia.tipo" type="text" id="inputFa" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/sub-familias" class="btn btn-danger">Cancelar</router-link>"
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
  subFamilia: { tipo: "" },
});

async function novaSub() {
  try {
    await services.subFamilia.salvar(state.subFamilia.tipo);
    router.push("/admin/sub-familias");
  } catch (error) {
    console.error("Erro ao criar familia:", error);
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