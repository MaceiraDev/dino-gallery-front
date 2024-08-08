<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title"><span v-if="state.id">Alterar Periodo</span> <span v-else>Cadastrar Periodo</span>
            </h5>
          </div>
        </div>
        <div class="line-form"></div>
        <form @submit.prevent="novaPergunta">
          <div class="row">
            <div class="col-sm-1" v-if="state.id">
              <label for="id" class="form-label">ID</label>
              <input type="text" v-model="state.id" id="id" readonly>
            </div>
            <div class="col-sm-6">
              <label for="pergunta" class="form-label">Pergunta</label>
              <input v-model="state.trivia.pergunta" type="text" id="pergunta" required>
            </div>
            <div class="col-sm-12">
              <label for="rsp" class="form-label">Resposta</label>
              <textarea rows="4" v-model="state.trivia.resposta" id="rsp" required></textarea>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary me-2"><span v-if="state.id">Alterar</span><span v-else>Cadastrar</span></button>
            <router-link to="/admin/perguntas-respostas" class="btn btn-danger">Cancelar</router-link>"
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
  trivia: {
    pergunta: "", resposta: "",
  }
});


onMounted(() => {
  if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getPergunta(state.id);
  }
})

async function getPergunta(id) {
  try {
    const { data } = await services.perguntas.getById(id);
    state.trivia = data;
  } catch (error) {
    console.error("Erro ao buscar pergunta:", error);
  }
}

async function novaPergunta() {
  try {
    if (state.id) {
      await services.perguntas.update(state.id, state.trivia);
      router.push("/admin/perguntas-respostas");
    } else {
      console.log(state.trivia)
      await services.perguntas.salvar({ pergunta: state.trivia.pergunta, resposta: state.trivia.resposta });
      router.push("/admin/perguntas-respostas");
    }
  } catch (error) {
    console.error("Erro ao salvar/alterar pergunta:", error);
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