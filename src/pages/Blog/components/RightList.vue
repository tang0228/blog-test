<template>
  <ul class="right-list-container">
    <li
      v-for="(item, i) in list"
      :key="i"
      class="list-container"
    >
      <span :class="{ active: item.selected }" @click="select(item)">{{ item.name }}</span>
      <span v-if="item.aside" :class="{ active: item.selected }" @click="select(item)">{{ item.articleCount }}篇</span>
      <RightList :list="item.children" @select="select"/>
    </li>
  </ul>
</template>

<script>
export default {
  // 属性是一个默认数组，
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    select(item) {
      if (!item.selected) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.right-list-container {
  .list-container {
    min-height: 30px;
    line-height: 30px;
    margin: 1em 0 1em 1em;
    cursor: pointer;
    span:nth-child(1) {
      margin-right: 12px;
      font-size: 16px;
    }
    span:nth-child(2) {
      font-size: 12px;
    }
    .active {
      color: @warn;
    }
  }
}
</style>