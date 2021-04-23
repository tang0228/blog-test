<template>
  <div class="test-conntainer">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "../SiteAside/index";
export default {
    components: {
        SiteAside
    }

}
</script>

<style scoped lang="less">
.test-conntainer {
  width: 250px;
  height: 600px;
}
</style>