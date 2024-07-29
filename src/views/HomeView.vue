<template>
  <main>
    <section id="section_1" style="position: relative">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img id="image_banner" src="./../assets/imagens/banners/banner_1.jpg" class="d-block w-100"
              alt="Banner Dino Um">
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img id="image_banner" src="./../assets/imagens/banners/banner_2.jpg" class="d-block w-100"
              alt="Banner Dino Dois">
          </div>
        </div>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        </div>
      </div>
      <div class="div_linear_gradiant">
        <Header />
        <div class="container">
          <div class="content_1">
            <div class="text-left">
              <h1>Dinos da Semana</h1>
              <p>De uma olhadada em nossos Dinos destaques</p>
              <Button :title="'Ver Dinos'" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <h1>Home</h1>
  </main>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Button from '@/components/ButtonExplore.vue';
</script>

<style scoped>
#image_banner {
  height: 100vh;
  object-fit: cover;
}

.div_linear_gradiant {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.637);
}

#imagem-banner {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.content_1 {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
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
