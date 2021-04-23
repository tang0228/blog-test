<template>
    <div class="about-container" v-loading="loading || !isLoaded">
        <iframe class="about-content" :src="data" frameborder="0" @load="handleLoad"></iframe>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    data() {
        return {
            isLoaded: false // iframe是否加载完成
        }
    },
    computed: mapState("about",["data", "loading"]),
    created() {
        this.$store.dispatch("about/fetchAbout");
    },
    methods: {
        handleLoad() {
            this.isLoaded = true
        }
    }
}
</script>

<style scoped lang="less">
.about-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;

}

</style>