<template>
    <img :src="imagePath" @click="$emit('click')" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    computed: {
        imagePath() {
            return process.env.VUE_APP_CLOUDINARY + this.src;
        }
    }
}
</script>

<style>
</style>
