<template>
  <div class="not-found-container">
      <img :src="src" alt="">
  </div>
</template>

<script>
import errorSrc from "@/assets/error.svg";
export default {
    data() {
        return {
            src: errorSrc
        }
    }
}
</script>

<style>

</style>