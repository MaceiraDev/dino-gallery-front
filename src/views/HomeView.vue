<template>
  <main>
    <section id="section_one">
      <div class="div_linear_gradient">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
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
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        aaaaaaaaaaaaaaaa
      </div>
    </section>
    <h1>Home</h1>
  </main>
</template>
<style scoped>
#image_banner {
  height: 100vh;
  object-fit: cover;
}

.div_linear_gradient {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.966);
}
</style>