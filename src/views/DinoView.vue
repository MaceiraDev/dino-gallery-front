<template>
  <main class="dino-page">
    <Header />
    <section class="dino-hero">
      <div class="overlay"></div>
      <div class="container text-center">
        <h1 class="dino-name" data-aos="zoom-in">{{ dino.name }}</h1>
        <p class="dino-era" data-aos="fade-up">{{ dino.era }}</p>
      </div>
    </section>
    <section class="dino-details container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-6">
          <h2>Características</h2>
          <ul class="list-group">
            <li class="list-group-item">Tamanho: {{ dino.size }}</li>
            <li class="list-group-item">Peso: {{ dino.weight }}</li>
            <li class="list-group-item">Dieta: {{ dino.diet }}</li>
            <li class="list-group-item">Habitat: {{ dino.habitat }}</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Sobre</h2>
          <p>{{ dino.description }}</p>
        </div>
      </div>
    </section>
    <section class="dino-extras container mt-5" data-aos="fade-up">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Galeria</h2>
          <div class="dino-gallery d-flex justify-content-center">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import { useRouter } from "vue-router";
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = useRouter();

if (router.currentRoute.value.params.id != undefined) {
    state.id = router.currentRoute.value.params.id;
    getDinoId(state.id);
  }

const dino = ref({
  name: 'Tyrannosaurus Rex',
  era: 'Cretáceo Superior',
  size: '12.3 metros',
  weight: '9 toneladas',
  diet: 'Carnívoro',
  habitat: 'Florestas e planícies',
  description: 'O Tiranossauro Rex é um dos dinossauros mais conhecidos, famoso por seu tamanho e predatório.',

});

async function getDinoId(id) {
  try {
    const { data } = await services.dino.getById(id);
    state.dino = data;
    state.images = data.images
  } catch (error) {
    console.error("Erro ao buscar dino:", error);
  }
}


onMounted(() => {
  AOS.init();
});
</script>
