<!-- src/components/adminFolder/NavigationPainel.vue -->
<template>
  <div class="navigation">
    <div class="profile">
      <img id="img" src="@/assets/imagens/painel/img_profile.jpg" alt="img profile">
      <div class="overlay">
        <div class="overlay-content">
          <p>Orlando</p>
          <button><i class="bi bi-power"></i></button>
        </div>
      </div>
    </div>
    <div class="scrollable-div">
      <router-link to="/admin" class="nav" :class="{ 'nav-selected': activeLink === 'dashboard1' }"
        @click="setActive('dashboard1')">
        <i class="bi bi-grid-1x2-fill"></i><span>Dashboard</span>
      </router-link>
      <router-link to="/admin/dietas" class="nav" :class="{ 'nav-selected': activeLink === 'dietas' }"
        @click="setActive('dietas')">
        <i class="bi bi-lungs-fill"></i><span>Dietas</span>
      </router-link>
      <router-link to="/admin/especies" class="nav" :class="{ 'nav-selected': activeLink === 'especies' }"
        @click="setActive('especies')">
        <i class="bi bi-bug"></i><span>Espécies</span>
      </router-link>
      <router-link to="/admin/dominios" class="nav" :class="{ 'nav-selected': activeLink === 'dominio' }"
        @click="setActive('dominio')">
        <i class="bi bi-virus2"></i><span>Dominios</span>
      </router-link>
      <router-link to="/admin/clados" class="nav" :class="{ 'nav-selected': activeLink === 'clados' }"
        @click="setActive('clados')">
        <i class="bi bi-bar-chart-steps"></i><span>Clado</span>
      </router-link>
      <router-link to="/admin/familias" class="nav" :class="{ 'nav-selected': activeLink === 'familias' }"
        @click="setActive('familias')">
        <i class="bi bi-card-list"></i><span>Familias</span>
      </router-link>
      <router-link to="/admin/subfamilias" class="nav" :class="{ 'nav-selected': activeLink === 'subfamilias' }"
        @click="setActive('subfamilias')">
        <i class="bi bi-card-list"></i><span>Sub Familias</span>
      </router-link>
      <router-link to="/admin/filos" class="nav" :class="{ 'nav-selected': activeLink === 'filos' }"
        @click="setActive('filos')">
        <i class="bi bi-card-list"></i><span>Filos</span>
      </router-link>
      <router-link to="/admin/generos" class="nav" :class="{ 'nav-selected': activeLink === 'generos' }"
        @click="setActive('generos')">
        <i class="bi bi-gender-ambiguous"></i><span>Gêneros</span>
      </router-link>
      <router-link to="/admin/reinos" class="nav" :class="{ 'nav-selected': activeLink === 'reinos' }"
        @click="setActive('reinos')">
        <i class="bi bi-globe-americas"></i><span>Reinos</span>
      </router-link>
      <router-link to="/admin/metodos-de-locomocaos" class="nav"
        :class="{ 'nav-selected': activeLink === 'metodoslocomocaos' }" @click="setActive('metodoslocomocaos')">
        <i class="bi bi-person-walking"></i><span>Métodos de Locomoção</span>
      </router-link>
      <router-link to="/admin/periodos" class="nav" :class="{ 'nav-selected': activeLink === 'periodos' }"
        @click="setActive('periodos')">
        <i class="bi bi-hourglass"></i><span>Periodos</span>
      </router-link>
      <router-link to="/admin/users" class="nav" :class="{ 'nav-selected': activeLink === 'users' }"
        @click="setActive('users')">
        <i class="bi bi-people-fill"></i><span>Users</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const activeLink = ref('dashboard1')
const route = useRoute()

function setActive(link) {
  activeLink.value = link
}

// Sincroniza o link ativo com a rota atual
if (route.name) {
  setActive(route.name.toLowerCase())
}
</script>

<style scoped>
/* Adicione seu CSS aqui */
</style>


<style scoped>
a {
  text-decoration: none;
}

.navigation {
  background: #212121;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.scrollable-div {
  overflow-y: auto;
  flex-grow: 1;
}

.profile {
  position: relative;
  width: 100%;
  height: 250px;
}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay-content {
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.overlay-content p {
  margin: 0;
  font-size: 18pt;
}

.overlay-content button {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18pt;
  border-radius: 4px;
  transition: 0.3s;
}

.overlay-content button:active {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-selected {
  background: #0f5 !important;
  margin: 15px !important;
  color: #000 !important;
  padding: 10px 20px !important;
  border-radius: 4px !important;
  border: #0f5 1px solid !important;
}

.nav-selected span {
  margin-left: 10px !important;
  font-weight: 700 !important;
}

.nav {
  background: transparent;
  margin: 15px;
  color: #0f5;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.3s;
  border: transparent 1px solid;
}

.nav:hover {
  border: #0f5 1px solid;

}

.nav span {
  margin-left: 10px;
  font-weight: 700;
}

@media (min-width: 1200px) and (max-width: 1600px) {
  .nav {
    padding: 10px 0px;
  }
}
</style>