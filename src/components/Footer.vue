<template>
    <footer id="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>Sobre Nós</h2>
            <p>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
              Praesent
              ut
              risus eget metus luctus accumsan id ultrices nunc.
            </p>
          </div>

          <div class="footer-section links">
            <h2>Links Úteis</h2>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div class="footer-section contact">
            <h2>Contato</h2>
            <p><i class="fas fa-map-marker-alt"></i> Endereço, Cidade, País</p>
            <p><i class="fas fa-phone"></i> (00) 1234-5678</p>
            <p><i class="fas fa-envelope"></i> email@exemplo.com</p>
          </div>
        </div>

        <div class="footer-bottom">
          &copy; 2024 Dino Gallery | Todos os direitos reservados.
        </div>

      </div>
    </footer>
</template>

<style scoped>
#footer {
  background: #000;
  color: #fff;
  padding: 30px 0;
  font-family: 'Poppins', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin: 0 15px;
  padding: 10px;
}

.footer-section h2 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #0f5;
}

.footer-section p,
.footer-section ul,
.footer-section li,
.footer-section a {
  font-size: 14px;
  line-height: 1.8;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #0f5;

}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 20px;
  }
}
</style>
