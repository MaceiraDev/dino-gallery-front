<template>
  <div id="banner">
    <div class="overlay"></div>
    <div class="container">
      <div class="content_1">
        <div data-aos="fade-right">
          <div class="text-left">
            <h1>Dinos da Semana</h1>
            <p>De uma olhadada em nossos Dinos destaques</p>
            <Button :title="'Ver Dinos'" />
          </div>
        </div>
        <div data-aos="fade-left">
          <div class="text-right">
            <h1>Os Criadores</h1>
            <p>Quem foram os criadores do Dino Gallery?</p>
            <Button :title="'Saiba mais sobre os criadores'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ButtonExplore.vue';

</script>
<style scoped>
#banner {
  position: relative;
  background-image: url('./../assets/imagens/banners/banner_3.webp');
  background-size: cover;
  background-position: center;
  height: 50vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.637);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.content_1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.content_1 h1 {
  color: #0f5;
  font-size: 40pt;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}

.content_1 p {
  color: #0f5;
  font-weight: 500;
  font-size: 16pt;
  line-height: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
