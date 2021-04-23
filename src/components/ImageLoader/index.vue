<template>
    <div class="imageLoader-container"> 
        <img :src="placeholder"  class="placeholder" v-if="!isLoad">
        <img :src="src" class="src" @load="load" :style="{opacity: selected ? '1' : ''}" >

    </div>
</template>

<script>
export default {
    props: {
        // 加载前的图片
        src: {
            type: String,
            required: true
        },
        // 加载后的图片
        placeholder: {
            type: String,
            required: true
        },
        // 加载图片的时间
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            selected: false,
            isLoad: false
        }
    },
    methods: {
        load() {
            this.selected = true;
            setTimeout(() => {
                this.isLoad = true;
                this.$emit("imgLoad")
            },this.duration)
        }
    },
}
</script>

<style scoped lang="less">
.imageLoader-container {
    position: relative;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: .8s;
    }
    .src {
        opacity: 0;
    }
}
</style>