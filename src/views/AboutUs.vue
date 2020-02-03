<template>
  <div class="about">
    <div class="background-image"></div>
    <div class="container">
      <my-title v-if="!isCompany"></my-title>
      <nav-menu :config="menuConfig"></nav-menu>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>
<script>
import MyTitle from '../components/MyTitle.vue';
import NavMenu from '../components/NavMenu.vue';

const menuConfig = {
  btnConfig: [
    {
      text: '首页',
      url: '/',
    },
    {
      text: '公司介绍',
      url: '/about_us/company',
    },
    {
      text: '发展历程',
      url: '/about_us/history',
    },
    {
      text: '朋友圈',
      url: '/about_us/friends',
    },
  ],
  defaultActive: '/about_us/company',
};
export default {
  name: 'AboutUs',
  components: {
    MyTitle,
    NavMenu,
  },
  data() {
    return {
      // fix display top logo
      isCompany: true,
      isPaused: '',
      menuConfig,
    };
  },
  watch: {
    $route() {
      this.isCompany = this.$router.history.current.name === 'Company';
    },
  },
  methods: {
    init() {
      this.isCompany = this.$router.history.current.name === 'Company';
    },
  },
};
</script>

<style lang="scss">
  .about {
    background-color: #000000;
  }
  .background-image {
    width: 100vw;
    height: 100vh;
    background-image: url("../../public/images/company/bg2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .16;
  }
  .container {
    position: absolute;
    top: 0;
    padding-top: 2vw;
    box-sizing: content-box;
    .view {
      height: 80vh;
      align-items: center;
    }
  }
  @media (max-width: 1000px) {
    .about {
      .container {
        width: 100vw;
        .navigator {
          .button-group {
            width: 100vw;
            margin-left: 0;
            .normal {
              height: 12vw;
              position: static;
              width: 24vw;
              line-height: 8vw;
              font-size: 5vw;
            }
            .active {
              position: static;
              width: 26vw;
              line-height: 8vw;
              font-size: 5vw;
              background-size: 30vw 10.9vw;
              background-position: -2vw -1.7vw;
            }
          }
        }
      }
    }
  }
</style>
