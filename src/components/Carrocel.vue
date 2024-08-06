<template>
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

</template>

<style scoped>
#image_banner {
  height: 100vh;
  object-fit: cover;
}

</style>

