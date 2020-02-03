<template>
  <div class="logo-container">
    <div @click="goBack" class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'MyTitle',
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
  .logo-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    .logo {
      width: 268px;
      height: 50px;
      z-index: 9;
      background-image: url("../../public/images/home-page/logo.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  @media (max-width: 1000px) {
    .logo-container {
      .logo {
        width: 50vw;
      }
    }
  }
</style>
