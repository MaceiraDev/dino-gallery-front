
<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="quad_icon">
            <div class="content">
              <i class="bi bi-basket" style="color: red;"></i>
              <p class="number">1</p>
              <p class="text">Novos Dinossauros</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="quad_icon">
            <div class="content">
              <img id="png-rex" src="@/assets/imagens/painel/tiranossauro-rex.png" alt="users">
              <p class="number">{{ state.id }}</p>
              <p class="text">Total de Dinossauros</p>
            </div>
          </div>
        </div>
        <template>
      <div class="col-md-3">
          <div class="quad_icon">
            <div class="content">
              <img id="png-rex" src="@/assets/imagens/painel/tiranossauro-rex.png" alt="users">
              <i class="bi bi-box-seam" style="color: blue;"></i>
              <p class="number">3</p>
              <p class="text">Total de Produtos</p>
            </div>
          </div>
        </div>
        </template>
        <div class="col-md-3">
          <div class="quad_icon">
            <div class="content">
              <i class="bi bi-envelope-arrow-down-fill" style="color: purple;"></i>
              <p class="number">4</p>
              <p class="text">Contatos Não Lidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import services from '@/services';
import { ref, onMounted, reactive } from 'vue';

const state = reactive({
  id: "",

})

async function getTotalIds(){
  const data = await services.mezozoico.getTotalIds()
  state.id = data.data
  console.log(data)

} 

onMounted(getTotalIds);
 
</script>

<style scoped>
main {
  margin: 50px 10px 10px 10px;
}

#png-rex {
  width: 55px;
  height: 55px;
}

.dashboard-banner {
  background-image: url("/images/admin/zodiac.jpeg");
  background-size: cover;
  height: 70vh;
  border-radius: 10px;
  background-position: top;
}

.quad {
  height: 70vh;
  background: #1a1b216d;
  border-radius: 10px;
}

.quad_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #212121;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border: solid 1px #97979721;
  border-radius: 8px;
  padding: 2rem;
}

.content {
  text-align: center;
}

.content i {
  font-size: 26pt;
}

.content .number {
  margin-bottom: 0;
  font-size: 18pt;
  font-weight: 900;
  color: gray;
}

.content .text {
  margin-bottom: 0;
  font-size: 16pt;
  font-weight: 500;
  color: black;
}
</style>