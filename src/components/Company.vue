<template>
  <div>
    <div class="company">
      <div class="background-piece-top1"></div>
      <div class="background-piece-top2"></div>
      <div class="background-piece-bottom"></div>
      <div class="left"></div>
      <div class="light"></div>
      <div class="logo"></div>
      <div class="text">
        <div class="text-hidder">
          <p>
            数空科技是国内可视化大脑、VR智能展厅、数据/业务中台的一流企业，是浦东城市大脑、云上贵州、高德打车的核心开发团队，
            是阿里云大数据战略合作伙伴，是阿里云创新中心合作伙伴。大爱(AI)工作坊，是兄弟一起干!
          </p>
          <p>
            数空科技是国内可视化大脑、VR智能展厅、数据/业务中台的一流企业，是浦东城市大脑、云上贵州、高德打车的核心开发团队，
            是阿里云大数据战略合作伙伴，是阿里云创新中心合作伙伴。大爱(AI)工作坊，是兄弟一起干!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'company',
};
</script>
<style lang="scss">
@keyframes infiniteRotate {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
  }
}
@-moz-keyframes infiniteRotate {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
  }
}
@-webkit-keyframes infiniteRotate {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
  }
}
@-o-keyframes infiniteRotate {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
  }
}
@keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.company {
  .background-piece-top1,
  .background-piece-top2,
  .background-piece-bottom {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .background-piece-top1 {
    top: 0;
    left: -22.5px;
    background-image: url("../../public/images/bg_top1.png");
    background-size: 35vw;
    background-position: top;
  }
  .background-piece-top2 {
    top: 0;
    left: -22.5px;
    background-image: url("../../public/images/bg_top2.png");
    background-size: 35vw;
    background-position: top;
    animation: flashing 5s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.75, 0.9);
    -moz-animation: flashing 5s infinite;
    -moz-animation-timing-function: cubic-bezier(0.25, 0.1, 0.75, 0.9);
    -webkit-animation: flashing 5s infinite;
    -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.75, 0.9);
    -o-animation: flashing 5s infinite;
    -o-animation-timing-function: cubic-bezier(0.25, 0.1, 0.75, 0.9);
  }
  .light {
    position: absolute;
    z-index: 99;
    top: 16.9vw;
    left: 25.3vw;
    width: 50vw;
    height: 50vh;
    background-image: url("../../public/images/light.png");
    background-position: top;
    background-repeat: no-repeat;
  }
  .background-piece-bottom {
    top: 50vh;
    background-image: url("../../public/images/company/bg_bottom.png");
    background-position: bottom;
  }
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 35.3vw;
  }
  .logo{
    width: 30vw;
    height: 14.5vw;
    background-image: url("../../public/images/company/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    animation: infiniteRotate 6s linear infinite;
    -moz-animation: infiniteRotate 6s linear infinite;
    -webkit-animation: infiniteRotate 6s linear infinite;
    -o-animation: infiniteRotate 6s linear infinite;
  }
  .text{
    width: 22vw;
    padding: 1vw;
    z-index: 5;
    background-image: url("../../public/images/company/text_border.png");
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    .text-hidder {
      overflow: hidden;
      height: 14vw;
      p {
        font-size: 1.7vw;
        font-weight: bolder;
        color: #ffffff;
        padding: 5px;
        text-align: left;
        animation: myMove 5s linear infinite;
        animation-play-state: running;
        animation-fill-mode: forwards;
      }
    }
    .text-hidder:hover p {
      animation-play-state: paused;
    }
  }
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }
}
@media (max-width: 1000px) {
  .company {
    overflow: hidden;
    .background-piece-top1, .background-piece-top2, .background-piece-bottom {
      background-size: 300px;
      left: -13px;
    }
    .light {
      top: 140px;
    }
    .background-piece-bottom {
      background-size: 800px;
    }
    flex-direction: column;
    justify-content: center;
    .logo {
      width: 80vw;
      height: 27vw;
      z-index: 6;
    }
    .text {
      width: 75vw;
      background-size: cover;
      height: 50vw;
      margin-top: 8vw;
      .text-hidder {
        height: 50vw;
        p {
          font-size: 7vw;
        }
      }
    }
  }
}
</style>
