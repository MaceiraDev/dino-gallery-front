<template>
  <carousel :items-to-show="3">
    <slide v-for="dino in dinos" :key="dino.id">
      <div class="card" :style="getBackgroundImage(dino.images[0].imageUrl)">
        <RouterLink :to="'/dino/' + dino.urn">
          <div class="overlay"></div>
          <div class="content">
            <h2> {{ dino.nome }}</h2>
            <p> {{ dino.infoCard }}</p>
          </div>
        </RouterLink>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

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
*{
  text-decoration: none;
}
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
  width: auto;
  max-width: 100%;
  text-align: left;
  margin-left: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}

.content h2 {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  margin-bottom: 0;
  font-size: 25pt;
  font-weight: 700;
}

.content p {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  font-size: 12pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
