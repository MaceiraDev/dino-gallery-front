<!-- LayoutAdmin.vue -->
<template>
    <div class="admin-layout">
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Galeria Dinossauro</a>
            </div>
        </nav>
        <div class="container-fluid">
            <nav class="row">
                <div class="col-2">
                    <NavigationPainel />
                </div>
                <div class="col-10">
                    <router-view />
                </div>
            </nav>
        </div>
    </div>
</template>
<script setup>
import './admin.css'
import { RouterView } from 'vue-router';
import NavigationPainel from '@/components/adminFolder/NavigationPainel.vue';

components: {
    NavigationPainel
}
</script>
<style></style>