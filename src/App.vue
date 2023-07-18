<template>
  <div class="app">
    <Navbar class="navbar" />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: fonts.$montserrat;
  color: colors.$black;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    position: fixed;
    top: 3rem;
  }
}

</style>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
