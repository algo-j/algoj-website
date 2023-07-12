<script>

const sidenav = document.getElementById('mySidenav');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add('active');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove('active');
}

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

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
      <div id="mySidenav" class="sidenav">
        <a id="closeBtn" href="#" class="close">&times;</a>
        <ul>
          <li><a href="#">A propos</a></li>
          <li><a href="#">Nos services</a></li>
          <li><a href="#">Témoignages</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <a href="#" id="openBtn">
        <span class="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
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

    .sidenav {
      height: 100%;
      width: 250px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: -250px;
      background-color: #e8e8e8;
      padding-top: 60px;
      transition: left 0.5s ease;
    }

    .sidenav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    /* Sidenav menu links */
    .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }

    .sidenav a:hover {
      color: #111;
    }

    /* Active class */
    .sidenav.active {
      left: 0;
    }

    /* Close btn */
    .sidenav .close {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
    }

    .burger-icon span {
      display: block;
      width: 35px;
      height: 5px;
      background-color: black;
      margin: 6px 0;
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

    .burger-menu {
      display: block;
    }

    .navbar-menu {
      display: none;
    }
  }

}

</style>
