<template>
    <div>
        <b-button class="mr-2" @click="start">Start a process</b-button>
        <b-button class="mr-2" @click="stop">Stop now!</b-button>
        <b-button class="mr-2" @click="action">Notify</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        start() {
            this.$eventbus.$emit("message", "Wait a moment...");
        },
        stop() {
            this.$eventbus.$emit("message", "");
        },
        action() {
            this.$eventbus.$emit("ephemeral", "I'm an ephemeral notification.");

            setTimeout(() => {
                this.$eventbus.$emit("ephemeral", "");
            }, 3000);
        }
    }
}
</script>
