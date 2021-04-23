<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "./components/ToTop"
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style scoped lang="less">
.app-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  .aside {
    width: 250px;
    height: 100%;
  }
  .center {
    width: 100%;
    height: 100%;
  }
}

</style>





