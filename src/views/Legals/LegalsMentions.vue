<script>
export default {
  name: 'LegalsMentions',
  components: {
  },
};

</script>

<template>
  <div class="legals-mentions">
    <div class="title">
      <h1 class="legals-title">Mentions légales</h1>
      <p class="legals-subtitle">En vigueur au 16/07/2023</p>
    </div>
    <div class="legals-content">
      <p class="legals-description">
        Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
        pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance
        des utilisateurs et visiteurs, ci-après l""Utilisateur", du site https://algoj.fr , ci-après
        le "Site", les présentes mentions légales.
      </p>
      <p class="legals-description">
        La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale
        et sans réserve des présentes mentions légales.
      </p>
      <p class="legals-description">
        Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
      </p>
    </div>
    <div class="legals-content">
      <h2 class="legals-section-title">
        ARTICLE 1 - L'éditeur
      </h2>
      <p class="legals-description">
        L’édition et la direction de la publication du Site est assurée par Martin Tom, domiciliée
        1 rue Jacques Ellul, dont l'adresse e-mail contact@tom-mrt.fr. Ci-après l'"Editeur".
      </p>
    </div>
    <div class="legals-content">
      <h2 class="legals-section-title">
        ARTICLE 2 - L'hébergeur
      </h2>
      <p class="legals-description">
        L'hébergeur du Site est l'IUT Bordeaux Montaigne, domicilié au 1 rue
        Jacques Ellul.
      </p>
    </div>
    <div class="legals-content">
      <h2 class="legals-section-title">
        ARTICLE 3 - Accès au site
      </h2>
      <p class="legals-description">
        Le Site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à
        Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel
        informatique, logiciels, connexion Internet, etc.) sont à sa charge.
      </p>
      <p class="legals-description">
        Le Site met en œuvre tous les moyens mis à sa disposition pour assurer un accès de qualité à
        ses services. L'obligation étant de moyens, le Site ne s'engage pas à atteindre ce résultat.
      </p>
      <p class="legals-description">
        Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du
        réseau ou du serveur n'engage pas la responsabilité du Site.
      </p>
      <p class="legals-description">
        L'accès aux services du Site peut à tout moment faire l'objet d'une interruption, d'une
        suspension, d'une modification sans préavis pour une maintenance ou pour tout autre cas.
        L'Utilisateur s'oblige à ne réclamer aucune indemnisation suite à l'interruption, à la
        suspension ou à la modification du présent contrat.
      </p>
    </div>
    <div class="legals-content">
      <h2 class="legals-section-title">
        ARTICLE 4 - Collecte des données
      </h2>
      <p class="legals-description">
        Le Site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL)
        dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.
      </p>
      <p class="legals-description">
        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou
        partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions
        et poursuites judiciaires telles que notamment prévues par le Code de la propriété
        intellectuelle et le Code civil.
      </p>
      <p class="legals-description">
        Pour plus d’informations, se reporter aux CGU du site https://algoj.fr accessible à la
        rubrique "CGU" Pour plus d'informations en matière de protection des données à caractère
        personnel , se reporter à la Charte en matière de protection des données à caractère
        personnel du site https://algoj.fr accessible à la rubrique "Données personnelles".
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.legals-mentions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0;
  gap: 6rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .legals-title {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .legals-subtitle {
      font-size: 1rem;
    }
  }

  .legals-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
  }
}

</style>
