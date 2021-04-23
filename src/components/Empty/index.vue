<template>
  <div class="empty-container">
      <Icon type="empty" />
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index"
export default {
    components: {
        Icon
    },
    props: {
        text: {
            type: String,
            default: "无数据"
        }
    }
}
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2449653_6jzi47r90cp.css";
.empty-container {
    position: absolute;
    height: 400px;
    width: 400px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont {
        font-size: 150px;
        color: #bbb;
    }
    p {
        font-size: 20px;
        color: #bbb;
    }
}
</style>