<template>
  <div class="avatar-container">
    <img :src="url" :style="{ width: size + 'px', height: size + 'px' }" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是字符串
      required: true, // 必须传
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped lang="less">
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
}
</style>