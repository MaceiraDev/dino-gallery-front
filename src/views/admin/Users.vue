<template>
    <main>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Users</h5>
                    </div>
                    <div class="col-md-6 text-end">
                      <RouterLink to="/admin/cadastrar/user" class="btn-new" title="New">Novo User</RouterLink>
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
                    <th scope="col">Email</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="user in state.Users" :key="user.id">
                <td scope="row">{{ user.id }}</td>
                <td>{{ user.nome }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.tipo }}</td>

                <td> <router-link :to="{ name: 'alterar-user', params: { id: user.id }, }" class="btn btn-primary"
                  title="Alterar"><i class="bi bi-pencil"></i>
                </router-link>
                  <a @click="deleteUsers(user.id)" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
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
  user: [],
})

async function getUsers() {
  try {
    const { data } = await services.user.getAll();
    state.user = data;
  } catch (error) {
    console.error('Erro ao buscar os usuarios:', error);
  }
}

async function deleteUsers(id) {
  if (!confirm('Tem certeza que deseja excluir este Usuario?')) return;
  console.log(id);
  try {
    await services.User.delete(id);
  } catch (error) {
    console.error('Erro ao criar usuario:', error);
  }
  getUsers();
}

onMounted(getUsers);
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