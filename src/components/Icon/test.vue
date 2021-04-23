<template>
    <div class="test-container">
        <div class="item" v-for="t in types" :key="t">
            <Icon :type="t" />
        </div>
    </div>
</template>

<script>
import Icon, {types} from "./";
export default {
    components: {
        Icon
    },
    data() {
        return {
            types
        }
    }
}
</script>

<style scoped>
.test-container {
    display: flex;
    justify-content: center;
    width: 400px;
    flex-wrap: wrap;
    margin: 50px auto;
}
.item {
    margin: 1em;
    text-align: center;
}

</style>