<template>
  <div class="trivia-container">
    <h2>Trivia sobre Dinossauros</h2>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item" v-for="(trivia, index) in state.trivias" :key="trivia.id">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#flush-' + index" aria-expanded="false" :aria-controls="'flush-' + index">
            <strong> {{ trivia.pergunta }}</strong>
          </button>
        </h2>
        <div :id="'flush-' + index" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            {{ trivia.resposta }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from '@/services';
import { onMounted, reactive } from 'vue';

onMounted(() => {
  getTrivia();
})

const state = reactive({
  trivias: [],
})

async function getTrivia() {
  const { data } = await services.perguntas.getAllSite();
  state.trivias = data;
}

</script>

<style scoped>
.trivia-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-weight: 700;
  color: #0f5;
  font-family: 'Poppins', sans-serif;
  margin-top: 5px;
}

.accordion-button {
  background-color: #000;
  font-weight: 700;
  color: #0f5;
  font-family: 'Poppins', sans-serif;
  border: none;
}

.accordion-button::after {
  filter: invert(70%) sepia(100%) saturate(2910%) hue-rotate(100deg) brightness(100%) contrast(100%);
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-item {
  border-bottom: solid 1px #0f5;
  border-top: none;
}

.accordion-collapse {
  background-color: #0c0c0c;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

.accordion-button:not(.collapsed) {
  box-shadow: none;
}
</style>
