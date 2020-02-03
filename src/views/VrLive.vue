<template>
  <div class="vr-live">
    <my-title></my-title>
    <div class="main" :class="isFullPage ? 'full-page': ''">
      <iframe :class="isFullPage ? 'full-page': ''" id="show-iframe" frameborder=0 name="showHere"
              :src="iframeUrl"></iframe>
      <div :class="isFullPage? 'closeFullPage' : 'clickLayer'" @click="fullPage($event)" ref="clickLayer"></div>
    </div>
    <div class="advance-list">
      <div class="advance">720°全面视角</div>
      <div class="advance">高清晰度</div>
      <div class="advance">低延迟</div>
      <div class="advance">跨平台播放</div>
      <div class="advance">
        <div class="button">
          <a :href="websiteUrl===''? '#': websiteUrl">查看完整全景</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getVR } from '../api/staticUrl';
import MyTitle from '../components/MyTitle.vue';

export default {
  name: 'VRLive',
  data() {
    return {
      isFullPage: false,
      iframeUrl: '',
      websiteUrl: '',
    };
  },
  components: {
    MyTitle,
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const vrUrl = await getVR();
      this.iframeUrl = vrUrl.iframeUrl;
      this.websiteUrl = vrUrl.websiteUrl;
    },
    fullPage() {
      this.isFullPage = !this.isFullPage;
    },
  },
};
</script>
<style lang="scss">
  .vr-live {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title {
      width: 268px;
      height: 50px;
      display: flex;
      color: #ffffff;
      .logo {
        width: 268px;
        height: 50px;
        margin-right: 2vw;
        background-image: url("../../public/images/home-page/logo.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .main {
      width: 86vw;
      height: 49.4vw;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 86vw 49.4vw;
      background-image: url("../../public/images/VR/VR_07.png");
      display: flex;
      align-items: center;
      justify-content: center;
      video {
        width: 66vw;
        height: 37vw;
      };
      iframe {
        width: 86vw;
        height: 49.4vw;
      }
    }
    .advance-list {
      width: 90vw;
      display: flex;
      color: #ffffff;
      font-weight: bolder;
      justify-content: space-around;
      font-size: 1.6vw;
      h3 {
        font-size: 1.6vw;
        line-height: 4.5vw;
      }
      .advance {
        width: 13vw;
        height: 4.5vw;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .advance:last-child {
        width: 100vw;
        height: 5.1vw;
      }
      .button {
        background-image: url("../../public/images/VR/VR_11.png");
        background-size: cover;
        background-position: center;
        width: 35vw;
        height: 9.8vw;
        line-height: 9.8vw;
        a {
          text-decoration: none;
          color: #fff;
        }
        a:link {color: #fff;}
        a:active {color: #fff;}
        a:hover {color: #fff;}
        a:visited {color: #fff;}
      }
    }
  }
  @media (max-width: 1000px) {
    .vr-live {
      .title {
        .logo {
          width: 60vw;
          height: 10vw;
        }
        h1 {
          display: none;
        }
      }
      .main {
        width: 100vw;
        height: 100vw;
        iframe {
          width: 100vw;
          height: 100vw;
        }
        .clickLayer {
          position: absolute;
          width: 100vw;
          height: 100vw;
          z-index: 99;
        }
        .closeFullPage {
          position: absolute;
          z-index: 99;
          top: 2vw;
          right: 2vw;
          background-image: url("../../public/images/close.png");
          background-size: contain;
          border-radius: 5vw;
          width: 10vw;
          height: 10vw;
          background-color: rgba(37, 227, 247, 0.3);
        }
      }
      .full-page {
        #show-iframe {
          width: 100vw;
          height: 100vh;
        }
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
      }
      .advance-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 45vw;
        font-size: 4vw;
        h3 {
          font-size: 4vw;
          width: 100vw;
        }
        .advance {
          width: 40vw;
          height: 12vw;
        }
      }
    }
  }
</style>
