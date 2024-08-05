<template>
  <carousel :items-to-show="3">
    <slide v-for="dino in dinos" :key="dino.id">
      <div class="card" :style="getBackgroundImage(dino.images[0].imageUrl)">
        <div class="overlay"></div>
        <div class="content">
          <h2> {{ dino.nome }}</h2>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  dinos: {
    type: Array,
    required: false
  }
})

// Função que é chamada no :style, capturando o link da imagem pelo params (imageUrl) e retornado o estilo CSS.
const getBackgroundImage = (imageUrl) => {
  return `background-image: url('${imageUrl}')`
}
</script>

<style scoped>
.card {
  position: relative;
  margin: 5px;
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: end;
  overflow: hidden;
}

.card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.411);
  z-index: 1;
}

.card .content {
  position: relative;
  z-index: 2;
}

.content h2 {
  font-family: 'Poppins', sans-serif;
  color: #fff;

}
</style>
