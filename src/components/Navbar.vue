<script setup>
</script>

<template>
  <div class="navbar">
    <div class="navbar-brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logos/logo.png" alt="AlgoJ Logo" />
      </router-link>
    </div>
    <div class="navbar-menu">
      <router-link class="button" to="/cosmoscope">
        Cosmoscope
      </router-link>
      <router-link class="button" to="/research">
        Recherche
      </router-link>
      <router-link class="button" to="/ressources">
        Ressources
      </router-link>
      <router-link class="cta" to="/contact">
        Contact
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3rem;
  width: 70%;
  border-radius: 100px;
  background-color: colors.$white;
  border: 1px solid colors.$gray;

  .navbar-brand {
    .logo {
      width: 7rem;
    }
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    .button {
      position: relative;
      color: colors.$black;
      text-decoration: none;
      transition: color .2s;

      &::after {
        content: '';

        position: absolute;
        width: 100%;
        height: 1px;
        background: colors.$black;

        left: 0;
        bottom: 0;

        transition: transform .2s;
        transform-origin: right;
        transform: scaleX(0);
      }

      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }

    .cta {
      background-color: colors.$black;
      color: colors.$white;
      text-decoration: none;
      padding: 0.8em 1.2em;
      border-radius: 10px;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: colors.$hover;
        color: colors.$white;
      }
    }
  }
}

</style>
