<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Novo Clado</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoClado">
          <div class="row">
            <div class="col-sm-1">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputClado" class="form-label">Tipo</label>
              <input v-model="state.clado.tipo" type="text" id="inputClado" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/clados" class="btn btn-danger">Cancelar</router-link>"
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
   clado: { tipo: "" },
});

async function novoClado() {
  try {
    await services.clado.salvar(state.clado.tipo);
    router.push("/admin/clados");
  } catch (error) {
    console.error("Erro ao criar clado:", error);
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