<template>
  <div class="brain">
    <div class="bg-brain">
      <my-title></my-title>
      <div class="navigator">
        <nav-menu :config="NavMenuConfig"></nav-menu>
<!--        <div class="button-group">-->
<!--          <a href="#">-->
<!--            <p class="normal" @click="activate('/')">首页</p>-->
<!--          </a>-->
<!--          <a href="#">-->
<!--            <p :class="active==='cityBrain' ? 'active': 'normal'" @click="activate('cityBrain')">城市大脑</p>-->
<!--          </a>-->
<!--          <a href="#">-->
<!--            <p :class="active==='industryBrain' ? 'active': 'normal'" @click="activate('industryBrain')">行业大脑</p>-->
<!--          </a>-->
<!--          <a href="#">-->
<!--            <p :class="active==='displayBrain' ? 'active': 'normal'" @click="activate('displayBrain')">智能展厅</p>-->
<!--          </a>-->
<!--        </div>-->
        <transition :enter-active-class="transitionName1" :leave-active-class="transitionName2">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import MyTitle from '../components/MyTitle.vue';
import NavMenu from '../components/NavMenu.vue';

const NavMenuConfig = {
  btnConfig: [
    {
      url: '/',
      text: '首页',
    },
    {
      url: 'cityBrain',
      text: '城市大脑',
    },
    {
      url: 'industryBrain',
      text: '行业大脑',
    },
    {
      url: 'displayBrain',
      text: '智能展厅',
    },
  ],
  defaultActive: 'cityBrain',
};

export default {
  name: 'ViewBrain',
  components: {
    MyTitle,
    NavMenu,
  },
  data() {
    return {
      active: 'cityBrain',
      transitionName1: '',
      transitionName2: '',
      NavMenuConfig,
    };
  },
  methods: {
    activate(name) {
      this.active = name;
      this.$router.push({ path: name });
    },
  },
};
</script>
<style lang="scss">
  .brain {
    color: #ffffff;
    .bg-brain {
      background-color: #000000;
      background-repeat: no-repeat;
      background-image: url("https://youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/images/bg4.png");
      background-position: center;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding-top: 3vw;
      .navigator {
        margin-top: 2vw;
        .view {
          height: 80vh;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .brain {
      .bg-brain {
        position: static;
        .navigator {
          .button-group {
            width: 100vw;
            margin-bottom: 5vw;
            margin-left: 0;
            p {
              font-size: 4.5vw;
              line-height: 7vw;
              width: 23vw;
              height: 7vw;
              background-size: 23.5vw 7vw;
            }
            .active {
              background-size: 26.5vw 11vw;
            }
          }
          .view {
            height: auto;
          }
        }
      }
    }
  }
</style>
