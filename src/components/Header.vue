<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <RouterLink to="/"><img class="navbar-brand" src="./../assets/imagens/dino_logo.png" alt="Logo Dino Gallery" /></RouterLink>
          <div class="navbar-collapse justify-content-center">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Sobre</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Galeria</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Contato</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <hr />
  </header>
</template>

<style scoped>
header {
  top: 0;
  width: 100%;
  z-index: 2;
  position: absolute;
}

.navbar {
  background-color: transparent;
  color: white;
  width: 100%;
}

.navbar-brand {
  width: 150px;
}

.navbar-collapse {
  display: flex;
  justify-content: center;
}

.navbar-nav .nav-item .nav-link {
  color: #0f5;
  position: relative;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  transition: none;
  font-weight: 700;
  font-size: 14pt;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #fff;
}

.navbar-nav .nav-item .nav-link:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
