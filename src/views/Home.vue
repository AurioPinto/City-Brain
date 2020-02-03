<template>
  <div class="home">
    <header>
      <div class="logo"></div>
    </header>
    <div id="container">
      <video v-if="!isMobile" autoplay preload="auto" muted
             src="//youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/images/home-background.mp4" loop="loop">
      </video>

      <video v-if="isMobile" class="hero-video hero-asset" playsinline muted
             poster="https://youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/images/home-page-first.jpg" autoplay
             @click="autoPlay" ref="autoVideo"
             src="//youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/images/home-background-mobile.mp4">
      </video>
      <div class="hoverBlock" v-if="!isMobile">
        <div v-for="(item, index) in pointMessage" class="hover"
             :key="index" :style="`left:${item.position.left};top:${item.position.top};`">
          <div class="text-container" :style="`width:${item.size.width};height:${item.size.height};`">
            <div v-for="(message, index) in item.msg" :key="index">
              <h3>{{message.header}}</h3>
              <p>{{message.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="decorate">
      <div ref="leftEl" class="left-column"></div>
      <div ref="rightEl" class="right-column"></div>
      <div class="bottom" ref="bottom">
        <div class="left"></div>
        <div class="button-group">
          <a href="#">
            <div class="about-us" @click="jumpTo('/about_us/company')">
              <img src="../../public/images/about-us.png" alt="">
              <p>关于我们</p>
            </div>
          </a>
          <a href="#">
            <div class="brain" @click="jumpTo('/view_brain/cityBrain')">
              <img src="../../public/images/home-page/icon_view.png" alt="">
              <p>可视化大脑</p>
            </div>
          </a>
          <a href="#">
            <div class="vr" @click="jumpTo('/vr_live')">
              <img src="../../public/images/home-page/icon_vr.png" alt="">
              <p>VR直播</p>
            </div>
          </a>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import pointMessage from '../api/pointMessage';

export default {
  name: 'home',
  data() {
    return {
      big: false,
      small: false,
      isMobile: true,
      pointMessage,
    };
  },
  created() {
    this.initVideo();
  },
  mounted() {
    this.animalEnter();
  },
  methods: {
    jumpTo(path) {
      this.animalLeave();
      setTimeout(() => {
        this.$router.push(path);
      }, 800);
    },
    animalEnter() {
      this.$refs.leftEl.className = `${this.$refs.leftEl.className} end`;
      this.$refs.rightEl.className = `${this.$refs.rightEl.className} end`;
      this.$refs.bottom.className = `${this.$refs.bottom.className} end`;
    },
    animalLeave() {
      this.$refs.leftEl.className = this.$refs.leftEl.className.replace(' end', '');
      this.$refs.rightEl.className = this.$refs.rightEl.className.replace(' end', '');
      this.$refs.bottom.className = this.$refs.bottom.className.replace(' end', '');
    },
    async initVideo() {
      this.isMobile = document.body.offsetWidth <= 750;
    },
    autoPlay() {
      const videoEl = this.$refs.autoVideo;
      videoEl.play();
    },
  },
};
</script>

<style lang="scss">
  .hoverBlock {
    .hover {
      width: 3vw;
      height: 3vw;
      position: absolute;
      /*background-color: white;*/
      .text-container {
        background-image: url('../../public/images/border_03.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-color: rgba(98, 98, 98, .6);
        display: none;
        position: relative;
        left: -8vw;
        top: -4vw;
        h3 {
          color: #fff;
          text-align: left;
          margin-top: 0.5vw;
          margin-left: 1vw;
          margin-bottom: 0.5vw;
        }
        p {
          color: #fff;
          text-align: left;
          margin-left: 1vw;
        }
      }
    }
    .hover:hover .text-container {
      display: inline-block;
    }
  }
  * {
    margin: 0;
    padding: 0;
  }
  .amap-icon img {
    width: 20px;
  }
  header {
    height: 50px;
    width: 100vw;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 3;
    display: flex;
    .logo {
      background-image: url("../../public/images/home-page/logo.png");
      width: 268px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      margin-top: 7px;
    }
    h1 {
      color: #ffffff;
    }
  }
  #container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    video {
      float: right;
      width: 100%;
      height: 100%;
    }
  }
  .amap-logo, .amap-copyright {
    bottom: -100px;
  }
  .decorate {
    overflow: hidden;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important
    }
    .left-column, .right-column {
      position: absolute;
      height: 50vw;
      width: 5vw;
      max-width: 150px;
      top: -5vw;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .left-column {
      background-image: url("../../public/images/home-page/left_bar.png");
      left: 0;
      opacity: 0;
      transition: 1s;
    }
    .right-column {
      background-image: url("../../public/images/home-page/right_bar.png");
      right: 0;
      opacity: 0;
      transition: 1s;
    }
    .bottom {
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      transition: 1s;
      opacity: 0;
      .left, .right, .button-group {
        width: 35vw;
        height: 5.1vw;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
      }
      .left {
        left: 0;
        background-image: url("../../public/images/home-page/bottom_left.png");
      }
      .button-group {
        height: 6vw;
        width: 29vw;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        background-image: url("../../public/images/home-page/btn_group.png");
        padding-bottom: 0.5vw;
        p {
          color: #ffffff;
          font-weight: bolder;
          padding-bottom: 0.2vw;
        }
        img {
          width: 3vw;
        }
        a div {
          width: 80px;
        }
        .about-us {}
        .brain {}
        .vr {}
      }
      .right {
        right: 0;
        background-image: url("../../public/images/home-page/bottom_right.png");
      }
    }
    .end {
      opacity: 1;
    }
  }
  @media (max-width: 1000px) {
    #container {
      width: 100vw;
      height: 100vh;
    }
    .home {
      header {
        height: 15vw;
        .logo {
          width: 50vw;
        }
        h1 {
          display: none;
        }
      }
      .decorate {
        .left-column {
          display: none;
        }
        .right-column {
          display: none;
        }
        .bottom {
          display: flex;
          justify-content: center;
          .left {
            display: none;
          }
          .right {
            display: none;
          }
          .button-group {
            width: 95vw;
            height: 20vw;
            padding-bottom: 1vw;
            div {
              img {
                width: 9vw;
              }
            }
          }
        }
      }
    }
  }
</style>
