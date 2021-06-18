<template>
    <div>
        <b-button class="mr-2" variant="primary" @click="start" :disabled="processRunning">Start a process</b-button>
        <b-button class="mr-2" variant="danger" @click="stop" :disabled="!processRunning">Stop now!</b-button>
        <b-button class="mr-2" variant="warning" @click="action">Notify</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            processRunning: false
        }
    },
    created() {
        this.$eventbus.$on("message", message => {
            this.processRunning = (message !== "");
        })
    },
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
