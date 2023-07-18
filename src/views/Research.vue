<script setup>
</script>

<template>
  <div class="research-menu">
    <h1 class="research-title">
      Articles AlgoJ
    </h1>
    <div class="article-list">
      <router-link class="article-button" to="https://algoj.hypotheses.org/434">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Assembling fragments: a two-layer knowledge management tool to explore algorithms
        and their social functions
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/449">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Conférence d’Alexandre Coutant sur les publics de l’information
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/442">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Enjeux de la littératie algorithmique : rendre visible l’invisible
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/371">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        L’éthique des données
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/366">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Un état de l’art de la data literacy
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/340">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Journée d’étude. Les journalistes au défi des algorithmes
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/447">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Enjeux définitionnels et scientifiques de la littératie algorithmique : entre
        mécanologie et rétro-ingénierie documentaire
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/290">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Regaining control over algorithms: a hypervisual tool to get from awareness to knowledge
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/115">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Quel traitement la presse française généraliste réserve-t-elle aux algorithmes ?
      </router-link>
      <div class="line"></div>
      <router-link class="article-button" to="https://algoj.hypotheses.org/89">
        <img src="@/assets/images/arrow.png" alt="arrow" class="arrow">
        Présentation de l’Osintosphère
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.research-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16rem 0;
  width: 100%;
  gap: 3rem;

  .research-title {
    font-size: 3rem;
    color: colors.$black;
  }

  .article-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  .article-button {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: colors.$black;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    width: 100%;
    gap: 1rem;

    .arrow {
      width: 2rem;
    }

    &:hover {
      background-color: colors.$gray;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: colors.$hover;
  }
}

</style>
