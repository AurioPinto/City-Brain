<template>
  <div class="menu-container">
    <div class="button-group">
      <a href="#" v-for="(item, index) in config.btnConfig" :key="index">
        <p :class="active===item.url? 'active': ''" class="normal" @click="activate(item.url)">{{item.text}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: ['config'],
  data() {
    return {
      active: '',
    };
  },
  created() {
    this.init();
  },
  methods: {
    activate(name) {
      this.active = name;
      this.$router.push(name);
      window.router = this.$router;
    },
    init() {
      this.active = this.config.defaultActive;
    },
  },
};
</script>
<style lang="scss">
  .menu-container {
    margin-top: 2vw;
    position: relative;
    z-index: 2;
    .button-group {
      margin-left: 4vw;
      width: 32vw;
      font-size: 0;
      p {
        width: 8vw;
        display: inline-block;
        font-size: 1.5vw;
        line-height: 2.3vw;
        font-weight: bolder;
        color: #ffffff;
        background-image: url("../../public/images/home-page/button_normal.png");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .active {
        background-image: url("../../public/images/home-page/button_active.png");
        background-position: center;
        background-size: 9.2vw;
        position: relative;
        top: -1px;
      }
    }
  }
  @media (max-width: 1000px) {
    .menu-container {
      .button-group {
        width: 100vw;
        margin-left: 0;
        p {
          height: 12vw;
          position: static;
          width: 25vw;
          line-height: 8vw;
          font-size: 5vw;
        }
        .active {
          position: static;
          width: 25vw;
          line-height: 8vw;
          font-size: 5vw;
          background-size: 29vw 10.9vw;
          background-position: -1.6vw -2vw;
        }
      }
    }
  }
</style>
