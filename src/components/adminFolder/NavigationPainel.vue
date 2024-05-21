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
        <a href="/admin" @click="setActive('dashboard1')" class="nav" :class="{ 'nav-selected': activeLink === 'dashboard1' }">
            <i class="bi bi-grid-1x2-fill"></i><span>Dashboard</span>
        </a>
        <a href="/admin/dietas" class="nav" @click="setActive('dietas')" :class="{ 'nav-selected': activeLink === 'dietas'  }">
            <i class="bi bi-lungs-fill"></i><span>Dietas</span>
        </a>
        <a href="/admin/especies" class="nav" @click="setActive('especies')" :class="{ 'nav-selected': activeLink === 'especies'  }">
            <i class="bi bi-bug"></i><span>Espécies</span>
        </a>
        <a href="/admin/dominios" class="nav" @click="setActive('dominio')" :class="{ 'nav-selected': activeLink === 'dominio'  }">
            <i class="bi bi-virus2"></i><span>Dominios</span>       </a>
       
        <a href="/admin/clados" class="nav" @click="setActive('clados')" :class="{ 'nav-selected': activeLink === 'clados'  }">
            <i class="bi bi-bar-chart-steps"><span>Clado</span></i>
        </a>  
        <a href="/admin/familias" class="nav" @click="setActive('familias')" :class="{ 'nav-selected': activeLink === 'familias'  }">
            <i class="bi bi-card-list"><span>Familia</span></i>
        </a> 
        <a href="/admin/subfamilias" class="nav" @click="setActive('subfamilias')" :class="{ 'nav-selected': activeLink === 'subfamilias'  }">
            <i class="bi bi-card-list"><span>Sub Familia</span></i>
        </a> 
        <a href="/admin/filos" class="nav" @click="setActive('filos')" :class="{ 'nav-selected': activeLink === 'filos'  }">
            <i class="bi bi-card-list"><span>Filos</span></i>
        </a> 
        <a href="/admin/generos" class="nav" @click="setActive('generos')" :class="{ 'nav-selected': activeLink === 'generos'  }">
            <i class="bi bi-gender-ambiguous"><span>Gêneros</span></i>
        </a> 
        <a href="/admin/reinos" class="nav" @click="setActive('reinos')" :class="{ 'nav-selected': activeLink === 'reinos'  }">
            <i class="bi bi-globe-americas"><span>Reinos</span></i>
        </a> 
        <a href="/admin/metodos-de-locomocaos" class="nav" @click="setActive('metodoslocomocaos')" :class="{ 'nav-selected': activeLink === 'metodoslocomocaos'  }">
             <i class="bi bi-person-walking"><span>Métodos de Locomoção</span></i>
        </a> 
        <a href="/admin/periodos" class="nav" @click="setActive('periodos')" :class="{ 'nav-selected': activeLink === 'periodos'  }">
            <i class="bi bi-hourglass"><span>Periodos</span></i>
        </a> 
        
        
        
        <a href="/admin/users" class="nav" @click="setActive('users')" :class="{ 'nav-selected': activeLink === 'users'  }">
            <i class="bi bi-people-fill"></i><span>Users</span>
        </a>
       
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeLink = ref(); // Defina o link ativo inicialmente como 'dashboard1'

function setActive(link) {
    activeLink.value = link;
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.navigation {
    background: #212121;
    min-height: 100vh;
    overflow: auto;
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
</style>