<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="text-bloc">
    <h2 class="bloc-title">
      {{title}}
    </h2>

    <p class="bloc-description">
      {{description}}
    </p>
  </div>
</template>

<style scoped lang="scss">

  .text-bloc {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70vw;

    .bloc-title {
      width: 70%;
      color: #000;
      font-size: 48px;
      font-family: Space Mono, monospace;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
    }

    .bloc-description {
      color: #000;
      font-size: 20px;
      font-family: Bitter, serif;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  /* Responsive Design */

  @media (max-width: 800px) {

    .text-bloc {
      .bloc-title {
        width: 100%;
        font-size: 34px;
        line-height: 36px;
      }
    }
  }

</style>
