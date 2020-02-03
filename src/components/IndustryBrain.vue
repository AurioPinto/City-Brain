<template>
  <div class="small-view">
    <div class="industry-brain" v-if="isMobile">
      <div v-for="(item, index) in industry" :key="index" class="product-container">
        <div class="video-container">
          <video controls="controls" preload="auto" class="video">
            <source :src="item.video.replace('/video/', '/video/')" type="video/mp4">
          </video>
        </div>
        <h1>{{item.title}}</h1>
        <div class="text-container">
        </div>
      </div>
    </div>
    <video-case-pc v-if="!isMobile" type="city"></video-case-pc>
  </div>
</template>
<script>
import VideoCasePc from './VideoCasePc.vue';
import getVideo from '../api/staticUrl';


export default {
  data() {
    return {
      industry: [],
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
      this.industry = res.industry;
      this.pre = res.pre;
    },
  },
};
</script>
<style lang="scss">
  .small-view {
    width: 100vw;
    overflow: auto;
    height: 70vh;
  }
  .industry-brain {
    color: #ffffff;
    .product-container {
      display: inline-block;
      margin: 15vw 0 0 0;
      h1 {
        font-size: 1.7vw;
        margin: 1vw 0;
      }
      .video-container {
        background-image: url('../../public/images/border_03.png');
        background-size: 24.4vw 14.2vw;
        background-repeat: no-repeat;
        padding: 2px;
        background-position: left top;
        height: 14vw;
        width: 24.4vw;
        .video {
          width: 23.7vw;
          height: 14vw;
        }
      }
      width: 25vw;
      .text-container {
        width: 20vw;
        p {
          font-size: 1vw;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .industry-brain {
      height: auto;
      display: flex;
      justify-content: space-around;
      overflow: auto;
      flex-direction: column;
      margin: 0;
      .product-container {
        width: 100vw;
        text-align: center;
        display: flex;
        align-items: center;
        margin-top: 5vw;
        flex-direction: column;
        &:first-child {
          margin-top: 2vw;
        }
        h1 {
          font-size: 5.5vw;
        }
        .video-container {
          height: 50vw;
          width: 75vw;
          background-size: 76vw 51vw;
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
