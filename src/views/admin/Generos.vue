<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Gêneros</h5>
          </div>
          <div class="col-md-6 text-end">
            <router-link to="/admin/cadastrar/genero" class="btn-new" title="New">Novo Genero</router-link>
          </div>
        </div>
      </div>
      <img src="@/assets/imagens/painel/img1.jpg" class="card-img-bottom" alt="Imagem de capa do card">
    </div>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="genero in state.generos" :key="genero.id">
          <td scope="row">{{ genero.id }}</td>
          <td>{{ genero.tipo }}</td>
          <td> <router-link :to="{ name: 'alterar-genero', params: { id: genero.id }, }" class="btn btn-primary"
              title="Alterar"><i class="bi bi-pencil"></i>
            </router-link>
            <a @click="deleteGenero(genero.id)" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import services from '@/services';
import { ref, onMounted, reactive } from 'vue';

const state = reactive({
  generos: [],
})

async function getGeneros() {
  try {
    const { data } = await services.genero.getAll();
    state.generos = data;
  } catch (error) {
    console.error('Erro ao buscar os generos:', error);
  }
}

async function deleteGenero(id) {
  if (!confirm('Tem certeza que deseja excluir este Genero?')) return;
  console.log(id);
  try {
    await services.genero.delete(id);
  } catch (error) {
    console.error('Erro ao criar genero:', error);
  }
  getGeneros();
}

onMounted(getGeneros);
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