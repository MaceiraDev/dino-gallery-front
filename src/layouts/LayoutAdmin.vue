<!-- LayoutAdmin.vue -->
<template>

  <body>
    <div class="admin-layout">
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Galeria Dinossauro</a>
        </div>
      </nav>
      <div class="container-fluid">
        <nav class="row">
          <div class="col-xl-2 col-md-3 col-sm-4">
            <NavigationPainel />
          </div>
          <div class="col-xl-10 col-md-9 col-sm-8">
            <router-view />
          </div>
        </nav>
      </div>
    </div>
  </body>
</template>
<script setup>
import './admin.css'
import { RouterView } from 'vue-router';
import NavigationPainel from '@/components/adminFolder/NavigationPainel.vue';

components: {
  NavigationPainel
}

</script>
<style>
.admin-layout {
  background-color: #151515;
}

.admin-layout .line-form {
  width: 100%;
  height: 1px;
  background-color: #0f5;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.admin-layout label {
  color: #fff;
  font-size: 14pt;
}

.admin-layout input {
  color: #fff;
  background-color: #212121;
  border: 1px solid #0f5;
  border-radius: 4px;
  font-size: 14pt;
  padding: 5px;
  width: 100%;
  outline: none;
}

.admin-layout input:focus {
  border: 1px solid #fff;
}
</style>