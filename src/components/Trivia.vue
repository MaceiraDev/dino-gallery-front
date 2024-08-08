<template>
  <div class="trivia-container">
    <h2>Trivia sobre Dinossauros</h2>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            A Maior Criatura que Já Andou na Terra
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Os Titanossauros são conhecidos por serem alguns dos maiores dinossauros que já existiram. Este grupo de dinossauros herbívoros incluía espécies como o Argentinosaurus, 
            que podia atingir até 40 metros de comprimento e pesar cerca de 70 toneladas.
             Essas criaturas imensas vagavam pelas planícies e florestas do período Cretáceo, há aproximadamente 90 a 100 milhões de anos. Suas enormes caudas e longos pescoços eram utilizados tanto para defesa quanto para alcançar vegetação em grandes alturas.
              A descoberta desses gigantes nos lembra da incrível diversidade e escala de vida que já existiu na Terra.
           
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            O Dinossauro Mais Rápido
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">O Velociraptor é muitas vezes associado à velocidade e agilidade. 
            Embora fosse pequeno, medindo cerca de 2 metros de comprimento e pesando aproximadamente 15 quilos, 
            este dinossauro carnívoro era um caçador formidável. 
            Estima-se que o Velociraptor podia correr a velocidades de 40 a 60 km/h, utilizando suas garras afiadas e dentes serrilhados para capturar presas com rapidez. 
            Ao contrário do que é mostrado em filmes populares, ele não era tão grande, mas sua velocidade e inteligência o tornavam um dos predadores mais eficientes de sua época
            
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Dinossauros Tiveram Penas?
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Uma das descobertas mais surpreendentes da paleontologia moderna é que muitos dinossauros, 
            incluindo o famoso Velociraptor, tinham penas. Durante muito tempo, os dinossauros foram retratados como criaturas escamosas, mas evidências fósseis recentes mostraram que penas eram comuns, especialmente entre os terópodes, o grupo de dinossauros que inclui os ancestrais das aves.
             Essas penas podiam ter várias funções, como regulação térmica, exibição durante o acasalamento, ou até mesmo para ajudar em saltos e manobras rápidas. 
            Isso reforça a ligação direta entre os dinossauros e os pássaros modernos, mostrando que os dinossauros não estão completamente extintos—eles simplesmente evoluíram e ainda estão entre nós.
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.trivia-container {
  max-width: 800px;
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
  background-color: black;
  font-weight: 700;
  color: #0f5;
  font-family: 'Poppins', sans-serif;
}

</style>