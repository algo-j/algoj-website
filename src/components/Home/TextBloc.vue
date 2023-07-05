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
    gap: 30px;
    width: 70vw;

    .bloc-title {
      width: 757px;
      height: 99px;
      color: #000;
      font-size: 48px;
      font-family: Space Mono;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
    }

    .bloc-description {
      color: #000;
      font-size: 18px;
      font-family: Bitter;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

</style>
