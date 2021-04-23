<template>
  <div class="test-container">
      <Layout>
            <template #left>
                <div class="left"></div> 
            </template>
            <div class="main">
                dasdsadsa
            </div>
            <template #right>
                <div class="right">asdasdasd</div> 
            </template>
      </Layout>
      
  </div>
</template>

<script>
import Layout from "./index";
export default {
    components: {
        Layout
    }
}
</script>

<style scoped lang="less">
.test-container {
    width: 60%;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;
    .left {
        width: 200px;
        height: 100%;
        background-color: red;
    }
    .main {
        width: 100%;
        height: 100%;
        background-color: aquamarine;
    }
    .right {
        width: 150px;
        height: 100%;
        background-color: blue;
    }
}

</style>