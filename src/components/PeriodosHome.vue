<template>
  <div class="top-half">
    <div class="left">
      <div class="content-overlay">
        <div class="overlay-text">Jurássico</div>
      </div>
    </div>
    <div class="right">
      <div class="content-overlay">
        <div class="overlay-text">Triássico</div>
      </div>
    </div>
  </div>
  <div class="bottom-half">
    <div class="content-overlay">
      <div class="overlay-text">Cretáceo</div>
    </div>
  </div>
</template>
<style scoped>
.top-half {
  display: flex;
  width: 100%;
  height: 50vh;
}

.left,
.right,
.bottom-half {
  position: relative;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.left {
  background-image: url("./../assets/imagens/sections/jurrasico.webp");
}

.right {
  background-image: url("./../assets/imagens/sections/triassico.png");
}

.bottom-half {
  background-image: url("./../assets/imagens/sections/Cretaceous.jpg");
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.411);
  z-index: 1;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-overlay:hover {
  background: rgba(0, 0, 0, 0.61);
}

.overlay-text {
  font-family: 'Poppins', sans-serif;
  color: #0f5;
  font-size: 25pt;
  font-weight: 700;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  text-transform: uppercase;
}

.content-overlay:hover .overlay-text {
  opacity: 1;
}
</style>