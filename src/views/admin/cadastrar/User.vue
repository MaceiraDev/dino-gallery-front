<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Novo User</h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novoUser">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="inputUser" class="form-label">Tipo</label>
              <input v-model="state.user.tipo" type="text" id="inputUser" required>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2">Cadastrar</button>
            <router-link to="/admin/users" class="btn btn-danger">Cancelar</router-link>"
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
   user: { tipo: "" },
});


onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getUser(state.id);
  }
})

async function getUser(id) {
  try {
    const { data } = await services.user.getById(id);
    state.subFamilia = data;
  } catch (error) {
    console.error("Erro ao buscar user:", error);
  }
}

async function novoUser() {
  if (state.id) {
    try {
      await services.user.update(state.id, state.user);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao alterar user:", error);
    }
  } else {
    try {
      await services.user.salvar(state.user.tipo);
      router.push("/admin/periodos");
    } catch (error) {
      console.error("Erro ao criar user:", error);
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