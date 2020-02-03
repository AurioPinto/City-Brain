<template>
  <div class="small-view">
    <div class="city-brain" v-if="isMobile">
      <div v-for="(item, index) in displayList" :key="index" class="product-container">
        <div class="video-container">
          <video controls preload="auto" class="video" poster="">
            <source :src="pre + item.video" type="video/mp4">
          </video>
        </div>
        <h1>{{item.title}}</h1>
        <div class="text-container">
        </div>
      </div>
    </div>
    <video-case-pc v-if="!isMobile" type="display"></video-case-pc>
  </div>
</template>
<script>
import VideoCasePc from './VideoCasePc.vue';
import getVideo from '../api/staticUrl';


export default {
  data() {
    return {
      displayList: [],
      isMobile: false,
      pre: '',
    };
  },
  components: {
    VideoCasePc,
  },
  created() {
    this.dataInit();
    this.isMobile = document.body.offsetWidth < 1000;
  },
  methods: {
    async dataInit() {
      const res = await getVideo();
      this.displayList = res.display;
      this.pre = res.pre;
    },
  },
};
</script>
<style lang="scss">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .small-view {
    width: 100vw;
    overflow: auto;
    height: 70vh;
  }
  .city-brain {
    color: #ffffff;
    /*display: flex;*/
    /*justify-content: space-around;*/
    .product-container {
      h1 {
        font-size: 1.7vw;
        margin: 1vw 0;
      }
      .video-container {
        background-image: url('../../public/images/border_03.png');
        background-size: 24.4vw 14.4vw;
        background-repeat: no-repeat;
        padding: 4px;
        background-position: left top;
        height: 14vw;
        .video {
          width: 23.7vw;
          height: 14vw;
        }
      }
      width: 25vw;
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-content: flex-start;*/
      /*justify-content: space-around;*/
      text-align: left;
      .text-container {
        width: 20vw;
      }
    }
  }
  @media (max-width: 1000px) {
    .city-brain {
      height: auto;
      flex-direction: column;
      .product-container {
        width: 100vw;
        text-align: center;
        display: flex;
        align-items: center;
        margin-top: 5vw;
        &:first-child {
          margin-top: 2vw;
        }
        h1 {
          font-size: 6vw;
          margin: 25px 0;
        }
        .video-container {
          height: 50vw;
          background-size: 76.6vw 51.5vw;
          .video {
            height: 50vw;
            width: 75vw;
          }
        }
        .text-container {
          width: 80vw;
          p {
            width: 80vw;
            font-size: 5vw;
          }
        }
      }
    }
  }
</style>
