<template>
  <main>
    <div class="not-found">
      <img src="./../assets/imagens/error/404_erro.png" alt="Imagem dino erro-404" />
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está tentando acessar não existe.</p>
      <router-link to="/"><button class="btn" style="background-color: #0f5; color: #000;">Voltar para a Página Inicial</button> </router-link>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  background-color: #111;
}

.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-family: Arial, sans-serif;
}

.not-found h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.not-found p {
  font-size: 1.2em;
  margin-bottom: 1em;
}
</style>
