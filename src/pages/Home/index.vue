<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="loading">
      <ul class="swiper-container" :style="{marginTop: marginTop}" ref="swiper" @transitionend="handleTransitionEnd">
        <li v-for="item in data" :key="item.id">
          <Swiper :items="item"/>
        </li>
      </ul>
      <div class="icon icon-up" v-show="index>=1" @click="changeTo(index-1)">
        <Icon type="pullUp"/>
      </div>
      <div class="icon icon-down" v-show="index<data.length - 1" @click="changeTo(index+1)">
        <Icon type="pullDown"/>
      </div>
      <ul class="indicator">
        <li :class="{active: index === i}" v-for="(item, i) in data" :key="item.id" @click="changeTo(i)"></li>
      </ul>
  </div>
</template>

<script>
import Swiper from "./Swiper";
import Icon from "@/components/Icon";
import {mapState} from "vuex";
export default {
  components: {
    Swiper,
    Icon
  },
  data() {
    return {
      index: 0, // 当前显示图片的索引
      containerHeight: 0, // 当前容器的高度
      isChange: false // 背景图片是否正在切换中
    }
  },
  created() {
    this.$store.dispatch("banner/fetchBanners");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);

  },
  destroyed() {
    window.removeEventListener("resize",this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index*this.containerHeight + 'px';
    },
    ...mapState("banner", ["loading", "data"])
  },
  methods: {
    changeTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if(this.isChange) {
        return;
      }
      if(e.deltaY < 0 && this.index > 0) {
        // 上滑
        this.index--;
        this.isChange = true;
      }else if(e.deltaY > 0 && this.index < this.data.length - 1) {
        // 下滑
        this.index++;
        this.isChange = true;
      }
    },
    handleTransitionEnd() {
      // 图片切换动画完成了
      this.isChange = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }  
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  overflow: hidden;
  .swiper-container{
    width: 100%;
    height: 100%;
  }
  li {
    width: 100%;
    height: 100%;
  }
  
}

.icon {
  position: absolute;
  left: 50%;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: 25px;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    bottom: 25px;
    animation: jump-down 2s infinite;
  }
  .iconfont {
    font-size: 30px;
  }
}

.indicator{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    margin: 5px;
    border: 2px solid #fff;
    &.active {
      background-color: @gray;
    }
  }
}
@keyframes jump-up {
  0%{
    transform: translateX(-50%) translateY(0);
  }
  50%{
    transform: translateX(-50%) translateY(-25px);
  }
  100%{
    transform: translateX(-50%) translateY(0);
  }
}
@keyframes jump-down {
  0%{
    transform: translateX(-50%) translateY(0);
  }
  50%{
    transform: translateX(-50%) translateY(25px);
  }
  100%{
    transform: translateX(-50%) translateY(0);
  }
}
</style>