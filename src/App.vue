<template>
  <div id="app">
      <transition name="zoom" mode="out-in">
          <router-view></router-view>
      </transition>
    <copy-right></copy-right>
  </div>
</template>
<script>
import CopyRight from './components/CopyRight.vue';

export default {
  name: 'App',
  components: {
    CopyRight,
  },
};
</script>

<style lang="scss">
html {
  font-size: 0.8vw;
  overflow: scroll;
  /* 隐藏滚动条 */
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
html::-webkit-scrollbar {
  display: none !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: none!important;
  /*background-size: 100vw;*/
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.zoom-enter-active {
    animation: bounce-in .5s ease;
}
.zoom-leave-active {
    animation: bounce-out .5s ease;
}
@keyframes bounce-in {
    0% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(0.8);
    }
}
@media (max-width: 1000px) {
  #app {
    background-image: url("../public/images/home-page-first.jpg");
  }
}
</style>
