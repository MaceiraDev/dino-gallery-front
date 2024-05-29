<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Nova Espécie</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaEspecie">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputDieta" class="form-label">Tipo</label>
              <input v-model="state.especie.tipo" type="text" id="inputDieta" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/dietas" class="btn btn-danger">Cancelar</router-link>"
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
  id: "",
  especie: { tipo: "" },
});

async function novaEspecie() {
  try {
    await services.especie.salvar(state.especie.tipo);
    router.push("/admin/especies");
  } catch (error) {
    console.error("Erro ao criar dieta:", error);
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