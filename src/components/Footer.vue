<template>
  <div class="footer">
    <div class="footer-content-top">
      <div class="footer-content-left">
        <img class="logo-algoj" src="@/assets/logos/logo.png" alt="algoj-logo">
        <p class="tag">L’algorithme l’enjeu du journalisme</p>
        <LanguageButton />
      </div>
      <div class="footer-content-menu">
        <h2 class="title">Navigation</h2>
        <ul class="footer-menu">
          <li><router-link class="link" to="/">Accueil</router-link></li>
          <li><router-link class="link" to="/projects">Cosmoscope</router-link></li>
          <li><router-link class="link" to="/conseillers">Recherche</router-link></li>
          <li><router-link class="link" to="/candidatures">Ressources</router-link></li>
        </ul>
      </div>
      <div class="footer-content-menu">
        <h2 class="title">Mentions Légales</h2>
        <ul class="footer-menu">
          <li>
            <router-link class="link" to="/legals">Mentions Légales</router-link>
          </li>
          <li>
            <router-link class="link" to="/conditions-generales">Conditions Générales</router-link>
          </li>
          <li>
            <router-link class="link" to="/confidentialite">Confidentialité</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-content-bottom">
      <p class="informations">
        Développé par AlgoJ - Tous droits réservés - 2023
      </p>
      <Button
        :textButton="construction[0].text"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Elements/Button.vue';
import LanguageButton from '@/components/Elements/LanguageButton.vue';

export default {
  name: 'Footer',
  components: {
    Button,
    LanguageButton,
  },
  data: () => ({
    construction: [
      {
        text: 'Retourner au début',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

li {
  list-style: none;
}

.link {
  text-decoration: none;
  color: colors.$black;
}

.footer {
  display: flex;
  flex-direction: column;
  border-top: solid 2px colors.$gray;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  gap: 2rem;

  .footer-content-top {
    display: flex;
    align-items: center;
    gap: 10rem;

    .footer-content-left {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .logo-algoj {
        width: 6rem;
      }
    }

    .footer-content-menu {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .footer-menu {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
    }
  }

  .footer-content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    border-top: solid 1px colors.$gray;
    padding-top: 5vh;
  }
}

</style>
