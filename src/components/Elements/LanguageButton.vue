<script setup>
</script>

<template>
  <button class="language-button">
    <img src="@/assets/flags/france.png" alt="flag" class="flag">
    <p class="language-name">Français, France</p>
  </button>
</template>

<style scoped lang="scss">

  .language-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 3px 15px;
    background-color: #ededed;
    border: none;
    width: fit-content;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;

    .flag {
      width: 2rem;
    }

    &:hover {
      background-color: #e5e5e5;
    }
  }

</style>
