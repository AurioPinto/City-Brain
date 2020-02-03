<template>
  <div class="friends">
    <video v-if="!isMobile" class="logos" ref="logs" autoplay preload="auto" muted
           src="https://youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/video/friends_pc.mp4" loop="loop">
    </video>
    <video v-if="isMobile" class="logos" ref="logs" autoplay preload="auto" muted
           src="https://youlishu.oss-cn-shanghai.aliyuncs.com/website/bigdata-x/video/friends_mobile.mp4" loop="loop">
    </video>
  </div>
</template>
<script>
export default {
  name: 'friends',
  data() {
    return {
      isMobile: '',
    };
  },
  created() {
    this.getScreen();
  },
  methods: {
    getScreen() {
      this.isMobile = document.body.offsetWidth < 1000;
    },
  },
};
</script>
<style lang="scss">
.friends {
  display: flex;
  justify-content: center;
  .logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90vw;
    height: 40vw;
    img {
      width: 65vw;
      height: 100%;
    }
  }
}
@media (max-width: 1000px) {
  .friends {
    transform: scale(1);
    .logos {
      height: 120vw;
      width: 70vw;
      img {
        width: 100vw;
        height: 100%;
        transform: scale(1);
      }
    }
  }
}
</style>
