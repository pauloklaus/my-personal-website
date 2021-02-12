<template>
    <div>
        <b-img :src="images[index].thumb" class="image-gallery" @click="openGallery()" />
        <light-box ref="lightBox" :showLightBox="false" :showCaption="false" :media="images" />
    </div>
</template>

<script>
import LightBox from "vue-image-lightbox";

const GALLERY_REFRESH_INTERVAL = 4000;

export default {
    components: { LightBox },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            timer: null,
            index: 0
        }
    },
    created() {
        this.startGalleryShow();
    },
    methods: {
        nextImage() {
            this.index =
                this.index == this.images.length - 1 ? 0 : this.index + 1;
        },
        startGalleryShow() {
            this.timer = setInterval(this.nextImage, GALLERY_REFRESH_INTERVAL);
        },
        stopGalleryShow() {
            clearInterval(this.timer);
            this.timer = null;
            
        },
        openGallery() {
            this.$refs.lightBox.showImage(this.index);
        }
    },
    beforeDestroy() {
        this.stopGalleryShow();
    }
}
</script>

<style scoped>
.image-gallery {
    cursor: pointer;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
