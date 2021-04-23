<template>
  <div class="swiper-container" ref="outer" @mousemove="move" @mouseleave="leave">
    <div class="image" ref="inner" :style="getImgPoint"> 
      <ImageLoader
      :src="items.bigImg"
      :placeholder="items.midImg"
      @imgLoad="handleImgLoad"
    />
    </div>
    
    <h2 ref="title" class="title">{{ items.title }}</h2>
    <p ref="desc" class="desc">{{ items.description }}</p>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  props: ["items"],
  data() {
    return {
      titleWidth: 0, // 标题的宽度
      descWidth: 0, // 描述的宽度
      outerSize: null, // 外层容器的尺寸
      innerSize: null, // 内存容器的尺寸
      mouseX: 0, // 鼠标横向位置
      mouseY: 0 // 鼠标纵向的位置
    };
  },
  computed: {
    // 得到图片位置
    getImgPoint() {
      if(!this.outerSize || !this.innerSize) {
        return;
      }
      // 多余的宽度和高度
      const extraWidth = this.innerSize.width - this.outerSize.width;
      const extraHeight = this.innerSize.height - this.outerSize.height;
      // 多余的宽度/外部容器的宽度 = left/鼠标的横向位置
      // 多余的高度/外部容器的高度 = left/鼠标的纵向位置

      const left = -extraWidth / this.outerSize.width * this.mouseX;
      const top = -extraHeight / this.outerSize.height * this.mouseY;
      return {
        left: left + "px",
        top: top + "px"
      }
    },
    // dom挂载让图片处于正中间
    center() {
      return {
        x: this.$refs.outer.clientWidth / 2,
        y: this.$refs.outer.clientWidth / 2
      }
    }
  },
  mounted() {
    
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.$refs.title.style.width = 0;
    this.$refs.title.style.opacity = 1;

    this.$refs.desc.style.width = 0;
    this.$refs.desc.style.opacity = 1;

    // 得到两个容器的宽高
    this.getSize();

    this.mouseX = this.center.x;
    this.mouseY = this.center.y;

    // 监听浏览器窗口变化，实时获取容器宽高
    window.addEventListener("resize", this.getSize);

  },

  destroyed() {
    // 组件销毁，移出事件
    window.removeEventListener("resize", this.getSize);
  },
  methods: {
    // 图片加载完成，开始显示字体
    handleImgLoad() {
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 获取容器宽高的方法
    getSize() {
      this.outerSize = {
        width: this.$refs.outer.clientWidth,
        height: this.$refs.outer.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };
    },
    // 鼠标移入让图片位置移动
    move(e) {
      const rect = this.$refs.outer.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    // 鼠标移开让图片处于正中间
    leave() {
      this.mouseX = this.$refs.outer.clientWidth / 2;
      this.mouseY = this.$refs.outer.clientHeight / 2
    }
  },
};
</script>

<style scoped lang="less">
.swiper-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  .image {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: .3s;
    
  }
  .title,
  .desc {
    opacity: 0;
    position: absolute;
    left: 30px;
    letter-spacing: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-shadow: 1px 0 1px rgba(0, 0, 0, 0.5), -1px 0 1px rgba(0, 0, 0, 0.5),
      0 1px 1px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(0, 0, 0, 0.5);
  }
  .title {
    text-shadow: 1px 0 1px rgba(0, 0, 0, 0.5), -1px 0 1px rgba(0, 0, 0, 0.5),
      0 1px 1px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(0, 0, 0, 0.5);
    font-size: 30px;
    top: calc(50% - 30px);
    transition: 1s;
  }
  .desc {
    font-size: 18px;
    top: calc(50% + 40px);
    transition: 2s 1s;
  }
}
</style>