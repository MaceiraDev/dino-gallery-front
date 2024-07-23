<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Dinossauros</h5>
          </div>
          <div class="col-md-6 text-end">
            <RouterLink to="/admin/cadastrar/dinossauro" class="btn-new" title="New">Novo Dino</RouterLink>
          </div>
        </div>
      </div>
      <img src="@/assets/imagens/painel/img6.jpg" class="card-img-bottom" alt="Imagem de capa do card">
    </div>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Espécie</th>
          <th scope="col">Tamanho</th>
          <th scope="col">Dieta</th>
          <th scope="col">Dieta Principal</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dino in state.dinos" :key="dino.id">
          <td scope="row">{{ dino.id }}</td>
          <td>{{ dino.nome }}</td>
          <td>{{ dino.especieNome }}</td>
          <td>{{ dino.tamanho }}</td>
          <td>{{ dino.dietaNome }}</td>
          <td>{{ dino.dietaPrincipal }}</td>
          <td>
            <router-link :to="{ name: 'alterar-dieta', params: { id: dino.id }, }" class="btn btn-primary"
              title="Alterar">
              <i class="bi bi-pencil"></i>
            </router-link>
            <a @click="deletarDino(dino.id)" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import services from '@/services';
import { onMounted, reactive } from 'vue';

const state = reactive({
  dinos: [],
  especies: {},
  dietas: {},
})

async function getDinos() {
  try {
    const { data } = await services.dino.getAll();
    state.dinos = data;
    await fetchEspecies();
    state.dinos.forEach(dino => { dino.especieNome = state.especies[dino.especie]?.tipo || 'Desconhecido'; });
    await getDietas();
    state.dinos.forEach(dino => { dino.dietaNome = state.dietas[dino.dieta]?.tipo || 'Desconhecido'; });

  } catch (error) {
    console.error('Erro ao buscar dinos:', error);
  }
}

async function fetchEspecies() {
  try {
    const { data } = await services.especie.getAll();
    data.forEach(especie => {
      state.especies[especie.id] = especie;
    });
  } catch (error) {
    console.error('Erro ao buscar as especies:', error);
  }
}

async function getDietas() {
  try {
    const { data } = await services.dieta.getAll();
    data.forEach(dieta => {
      state.dietas[dieta.id] = dieta;
    })
  } catch (error) {
    console.error('Erro ao buscar dietas:', error);
  }
}

async function deletarDino(id) {
  if (!confirm('Tem certeza que deseja excluir este Dino Fofinho?')) return;
  try {
    await services.dino.delete(id);
    getDinos(); // Atualiza a lista de dinossauros após deletar
  } catch (error) {
    console.error('Erro ao deletar dino:', error);
  }
}

onMounted(getDinos);
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
  border-radius: 10px 10px 0px 0px;
}

.card h5 {
  color: #0f5;
}

.card-img-bottom {
  border-radius: 0;
}

.card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

.btn-new {
  background: transparent;
  color: #0f5;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.3s;
  border: transparent 1px solid;
}

.btn-new:hover {
  border: #0f5 1px solid;

}

th {
  color: #0f5;
}

th,
td {
  background: #212121;
  text-align: center;
}

.btn {
  margin-right: 5px;
}
</style>