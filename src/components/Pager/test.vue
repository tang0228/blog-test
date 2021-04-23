<template>
  <div>
     <!-- 分页组件 -->
     <Pager :current="current" :total="total" :limit="limit" @pageChange="handlePageChange($event)" />
  </div>
</template>

<script>
// 引入组件
import Pager from "./";
export default {
  name :"App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Pager
  },
  data() {
    return {
      current: 12,
      total: 100,
      limit: 5,
    }
  },
  methods: {
    // 参数是子组件传递的数据
    handlePageChange(page) {
      this.current = page;
    }
  }
}
</script>

<style scoped>

</style>




