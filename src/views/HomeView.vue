<template>
  <main>
    <section id="section_1" style="position: relative">
      <Carrocel />
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
    <section class="services spad" style="position: relative">
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="services__title">
                <div class="section-title">
                  <span>Curiosidades sobre os dinossauros!!</span>
                  <h2>O que é o Dino Gallery?</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.n, ante urna consectetur urna, sed tempus sem
                  nulla a nulla.
                  Phasellus in aliquam lorem. Etiam efficitur urn</p>
                <a href="#" class="primary-btn">bla bla bla</a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon">
                      <i class="bi bi-exclamation-square-fill"></i>
                    </div>
                    <h4>Maior Predador:</h4>
                    <p>O Tyrannosaurus rex é um dos predadores mais conhecidos, com uma mordida poderosa capaz de
                      esmagar ossos. Ele viveu no final do período Cretáceo, há cerca de 68 a 66 milhões de anos.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon">
                      <i class="bi bi-airplane-fill"></i>
                    </div>
                    <h4>Fósseis pelo Mundo:</h4>
                    <p>Fósseis de dinossauros foram encontrados em todos os continentes, incluindo a Antártida,
                      demonstrando que esses animais eram extremamente adaptáveis e diversificados.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon">
                      <i class="bi bi-globe2"></i>
                    </div>
                    <h4>Maior Dinossauro Terrestre: </h4>
                    <p>O Patagotitan mayorum é considerado um dos maiores dinossauros terrestres, medindo cerca de 37
                      metros de comprimento e pesando em torno de 69 toneladas.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon">
                      <i class="bi bi-flower3"></i>
                    </div>
                    <h4>Herbívoros Gigantes: </h4>
                    <p>Alguns dos maiores dinossauros, como os saurópodes (ex: Brachiosaurus e Diplodocus), eram
                      herbívoros que se alimentavam de grandes quantidades de vegetação.</p>
                  </div>
                </div>
              </div>
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
import Carrocel from '@/components/Carrocel.vue';
</script>

<style scoped>
@media (min-width: 992px) {
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}


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

.coluna_infoDino {
  color: #0f5;

}

.coluna_infoDino p {
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

}

.coluna_infoDino h4 {
  font-family: 'Poppins';
}

.services {
  background: #111;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
