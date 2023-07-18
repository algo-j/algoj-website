<script>
export default {
  props: {
    textButton: String,
  },
};
</script>

<template>
  <router-link to="/research" class="button">
    <p class="text">
      {{textButton}}
    </p>
  </router-link>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

  .button {
    display: flex;
    flex-direction: row;
    padding: 12px 35px;
    border-radius: 999px;
    background: colors.$black;
    width: fit-content;
    text-decoration: none;
    transition: all 0.2s ease;

    p.text {
      color: white;
    }

    &:hover {
      background-color: colors.$hover;
    }
  }

</style>
