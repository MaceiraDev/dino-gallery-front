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
                <p class="sobreDino">
                  Dino Gallery é um site dedicado a uma incrível galeria de dinossauros, 
                  criado por dois estudantes de Sistemas para Internet. 
                  Nosso objetivo é não apenas compartilhar nossa paixão pelos dinossauros, mas também demonstrar nossas habilidades e conhecimentos em desenvolvimento web, 
                  enquanto buscamos nos inserir no mercado de trabalho de Tecnologia da Informação (TI).
                  
                  Nós, os fundadores do Dino Gallery, estamos ansiosos para usar esta plataforma como um trampolim para futuras oportunidades na indústria de TI, mostrando nossas competências técnicas e nossa capacidade de criar conteúdos digitais envolventes e bem elaborados.</p>
                <a href="sobre" class="primary-btn">saiba mais sobre os criadores</a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon rotating-border">
                      <img src="./../assets/imagens/icons/carne.svg" id="icon_curiosidades">
                    </div>
                    <h4>Maior Predador:</h4>
                    <p>O Tyrannosaurus rex é um dos predadores mais conhecidos, com uma mordida poderosa capaz de
                      esmagar ossos. Ele viveu no final do período Cretáceo, há cerca de 68 a 66 milhões de anos.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon rotating-border">
                      <img src="./../assets/imagens/icons/mundo.png" id="icon_curiosidades">
                    </div>
                    <h4>Fósseis pelo Mundo:</h4>
                    <p>Fósseis de dinossauros foram encontrados em todos os continentes, incluindo a Antártida,
                      demonstrando que esses animais eram extremamente adaptáveis e diversificados.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon rotating-border">
                      <img src="./../assets/imagens/icons/maiorDino.png" id="icon_curiosidades">
                    </div>
                    <h4>Maior Dinossauro Terrestre: </h4>
                    <p>O Patagotitan mayorum é considerado um dos maiores dinossauros terrestres, medindo cerca de 37
                      metros de comprimento e pesando em torno de 69 toneladas.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="coluna_infoDino">
                    <div class="coluna_infoDino__icon rotating-border">
                      <img src="./../assets/imagens/icons/noun-dinosaur-2451722.png" id="icon_curiosidades">
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

.sobreDino{
  text-align: justify;
}

.section-title  {
  color: #0f5;
  font-weight: 700;
}

.section-title h2 {
  font-weight: 700;
}

.rotating-border {
  position: relative;
  display: inline-block;
}

.rotating-border::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #0f5;
  box-sizing: border-box;
  transition: transform 1s ease;
  transform-origin: center;
}

.rotating-border:hover::after {
  transform: rotate(140deg);
}

#icon_curiosidades {
  height: 50px;
  width: 50px;
  object-fit: cover;
  display: block;
  position: relative;
  left: 0;
  top: 0;
  filter: invert(70%) sepia(100%) saturate(2910%) hue-rotate(100deg) brightness(100%) contrast(100%);
}


.coluna_infoDino {
  color: #0f5;
  font-weight: 700;
  margin-bottom: 20px;
}

.coluna_infoDino__icon {
  display: inline-block;
  padding: 15px;
  margin-bottom: 1rem;
}

.coluna_infoDino p {
  font-size: 16px;
  margin: 10px 0;
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
  font-weight: 700;
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
