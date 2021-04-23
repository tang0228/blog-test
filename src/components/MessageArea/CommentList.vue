<template>
  <ul class="comment-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
        <Avatar :url="item.avatar" :size="50" />
      </div>
      <div class="main">
        <h2>{{ item.nickname }}</h2>
        <p>{{ item.content }}</p>
        <span>{{ format(item.createDate, true) }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import format from "@/utils/format";

export default {
  components: {
    Avatar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    format
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.comment-list-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  li {
    display: flex;
    border-bottom: 1px solid @gray;
    padding: 10px 0;
    .avatar {
      margin-right: 10px;
    }
    .main {
      flex: 1 1 auto;
      position: relative;
      h2 {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
        color: @success;
      }
      span {
        position: absolute;
        top: 5px;
        right: 0;
        color: @gray;
        font-size: 14px;
      }
    }
  }
}
</style>