<script setup>
</script>

<template>
  <div class="article">
    <div class="text-article">
      <img src="@/assets/images/alexandrecoutant.jpeg"
           alt="Alexandre Coutant"
           class="landing-article-img">
      <h1 class="article-title">
        Conférence d’Alexandre Coutant sur les publics de l’information
      </h1>
      <h3 class="article-subtitle">
        Le 11 juin 2023, le professeur Alexandre Coutant du département de communication sociale et
        publique de l’Université du Québec à Montréal (UQAM) a donné une conférence intitulée “Ce
        que les publics de l’information permettent de penser en termes d’éducation aux médias et
        à l’information”, dans le cadre du projet ALGO-J
      </h3>
      <h3 class="article-subtitle">
        Résumé de l’intervention
      </h3>
      <p class="article-content">
        L’éducation aux médias et à l’information (ÉMI) associe historiquement la nécessité de
        développer des littératies informationnelles à la possibilité d’exercer pleinement sa
        citoyenneté. La numérisation des pratiques informationnelles est venue multiplier les
        dimensions où une éducation est nécessaire comme les contextes dans lesquels exercer cette
        citoyenneté. Pourtant les recherches critiques en ÉMI déplorent régulièrement des
        initiatives pédagogiques trop focalisées sur des dimensions instrumentales,
        individualisantes et peu connectées aux questions de participation citoyenne. Une tendance
        renforcée par la panique médiatique entretenue autour des fausses informations et du
        complotisme. Au sein de ce débat, un constat demeure hautement problématique : le peu
        d’enquêtes approfondies permettant de comprendre les publics de l’information. Cette
        intervention propose de détailler tout l’intérêt à tirer d’une meilleure compréhension de
        ces derniers, en se fondant sur l’exemple d’une enquête menée auprès des publics québécois
        de l’information.
      </p>
    </div>
    <div class="metadatas">
      <div class="metadatas-items">
        <h4 class="metadatas-items-title">Date</h4>
        <p class="article-date">11 juin 2023</p>
      </div>
      <div class="metadatas-items">
        <h4 class="metadatas-items-title">Auteur</h4>
        <p class="article-author">Rayya Roumanos</p>
      </div>
      <div class="metadatas-items">
        <h4 class="metadatas-items-title">Tags</h4>
        <p class="article-tags">EMI, information, journalisme, littératie, publics</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.article {
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 3rem;
    padding: 3rem;
    background-color: #f1f1f1;
    border-radius: 20px 20px 0 0;

    .landing-article-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }

    .article-title {
      color: #000;
      font-size: 36px;
      font-family: Space Mono, monospace;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }

    .article-subtitle {
      color: #000;
      font-size: 24px;
      font-family: Bitter, serif;
      font-weight: 700;
      line-height: 28px;
    }
  }

  .metadatas {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    background-color: #d3d3d3;
    padding: 3rem;
    border-radius: 0 0 20px 20px;

  }
}

</style>
