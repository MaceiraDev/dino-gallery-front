<template>
  <main>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">Familias</h5>
          </div>
          <div class="col-md-6 text-end">
            <RouterLink to="/admin/cadastrar/familia" class="btn-new" title="New">Nova Familia</RouterLink>
          </div>
        </div>
      </div>
      <img src="@/assets/imagens/painel/img3.jpg" class="card-img-bottom" alt="Imagem de capa do card">
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
        <tr v-for="familia in state.familias" :key="familia.id">
          <td scope="row">{{ familia.id }}</td>
          <td>{{ familia.tipo }}</td>
          <td><a href="" class="btn btn-primary" title="Alterar"> <i class="bi bi-pencil"></i></a>
            <a @click="deleteFamilia(familia.id)" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
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
  familias: [],
})

async function getFamilias() {
  try {
    const { data } = await services.familia.getAll();
    state.familias = data;
  } catch (error) {
    console.error('Erro ao buscar as familias:', error);
  }
}

async function deleteFamilia(id) {
  if (!confirm('Tem certeza que deseja excluir esta Familia?')) return;
  console.log(id);
  try {
    await services.familia.delete(id);
  } catch (error) {
    console.error('Erro ao criar familia:', error);
  }
  getFamilias();
}

onMounted(getFamilias);
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