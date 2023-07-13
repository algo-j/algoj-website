<script>
export default {
  name: 'Navbar',
  data: () => ({
    menuOpened: false,
    onMobile: false,
  }),
  methods: {
    reloadResponsive() {
      this.onMobile = window.innerWidth <= 800;
      if (!this.onMobile) this.menuOpened = false;
    },
  },
  beforeMount() {
    this.reloadResponsive();
    const th = this;
    window.addEventListener('resize', () => {
      th.reloadResponsive();
    });
  },
};

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
    <div class="burger-menu">
      <div :class="'burger-button ' + (menuOpened ? 'change' : '')"
           v-if="onMobile"
           @click="menuOpened = !menuOpened">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <transition name="fade">
        <div class="phone-menu" v-if="menuOpened">
          <h1 class="phone-menu-logo">AlgoJ</h1>
          <div class="opened-button">
            <a href="/">Cosmoscope</a>
            <a href="/">Recherches</a>
            <a href="/menu">Ressources</a>
          </div>
        </div>
      </transition>
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

  .burger-menu {
    display: none;

    .burger-button {
      z-index: 99;
    }

    .phone-menu {
      position: fixed;
      z-index: 98;

      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;

      background: colors.$white;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;

      .opened-button {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
          width: 100%;
          text-align: center;
          text-decoration: none;
          color: colors.$black;

          transition: .2s;

          &:hover {
            background: colors.$gray;
            color: colors.$hover;
          }
        }
      }
    }
  }
}

/* Responsive Design */

@media (max-width: 800px) {

  .navbar {
    padding: 0.8rem 1.5rem;
    width: 80vw;

    .navbar-brand {
      .logo {
        width: 4rem;
      }
    }

    .navbar-menu {
      display: none;
    }

    .burger-menu {
      display: block;
      z-index: 1;

      .bar1, .bar2, .bar3 {
        z-index: 97;
        width: 30px;
        height: 4px;
        background-color: colors.$black;
        margin: 6px 0;
        transition: 0.4s;
        border-radius: 9px;
      }

      .change .bar1 {
        -webkit-transform: rotate(-43deg) translate(-8px, 6px);
        transform: rotate(-45deg) translate(-8px, 6px);
      }

      .change .bar2 {
        opacity: 0;
      }

      .change .bar3 {
        -webkit-transform: rotate(43deg) translate(-7x, -8px);
        transform: rotate(45deg) translate(-7px, -8px);
      }

      header .navbar {
        justify-content: space-between;
        padding: 0 10%;
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
}

</style>
