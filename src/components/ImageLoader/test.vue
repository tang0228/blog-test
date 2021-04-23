<template>
  <ImageLoader 
    :src="src"
    :placeholder="placeholder" 
    :duration="3000" 
    @imgLoad="handleImgLoad"
  />
</template>

<script>
import ImageLoader from "./"
export default {
    components: {
        ImageLoader
    },
    data() {
        return {
            placeholder: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
            src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        }
    },
    methods: {
        handleImgLoad() {
            console.log("事件完成");
        }
    }
}
</script>

<style>

</style>