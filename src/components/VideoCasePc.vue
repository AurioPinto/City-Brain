<template>
  <div class="video-case">
    <div class="view">
      <div class="container">
        <i :class="{'icon-disabled': page.index === 1}" class="iconfont icon-zuojiantou icon-control" @click="prePage"></i>
        <transition-group name="list" tag="p" class="p-tag">
          <div v-for="(item) in displayVideo" :key="item.video" class="product-container">
            <div class="video-container">
              <video controls class="video" poster="">
                <source :src="videoData.pre + item.video" type="video/mp4">
              </video>
            </div>
            <h1>{{item.title}}</h1>
            <div class="text-container">
            </div>
          </div>
        </transition-group>
        <i :class="{'icon-disabled': page.index === page.maxIndex}" class="iconfont icon-youjiantou icon-control" @click="nextPage"></i>
      </div>
    </div>
  </div>
</template>
<script>
import getVideo from '../api/staticUrl';


export default {
  name: 'VideoCasePc',
  data() {
    return {
      videoData: [],
      typeVideoData: [],
      displayVideo: [],
      page: {
        index: 1,
        size: 3,
        maxIndex: 2,
      },
    };
  },
  props: {
    type: {
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['city', 'industry', 'display'].indexOf(value) !== -1;
      },
    },
  },
  created() {
    this.init();
  },
  methods: {
    selectDisplay() {
      setTimeout(() => {
        this.displayVideo = this.typeVideoData.slice((this.page.index - 1) * this.page.size, this.page.index * this.page.size);
      }, 800);
    },
    async init() {
      this.videoData = await getVideo();
      this.typeVideoData = this.videoData[this.type];
      this.page.maxIndex = Math.ceil(this.typeVideoData.length / this.page.size);
      this.selectDisplay();
    },
    nextPage() {
      if (this.page.index !== this.page.maxIndex) {
        this.displayVideo = [];
        this.page.index += 1;
        this.selectDisplay();
      }
    },
    prePage() {
      if (this.page.index !== 1) {
        this.displayVideo = [];
        this.page.index -= 1;
        this.selectDisplay();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../iconfont/iconfont.css';
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.icon-control {
  width: 5vw;
  height: 3vw;
  color: #fff;
  font-size: 3vw;
  display: inline-block;
  margin-top: 28vw;
}
.p-tag {
  display: flex;
  justify-content: space-between;
  width: 85vw;
}
.icon-disabled {
  color: #aaa;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.product-container {
  margin: 22vw 0 0 0;
  display: inline-block;
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
  text-align: left;
  .text-container {
    width: 20vw;
  }
}
</style>
