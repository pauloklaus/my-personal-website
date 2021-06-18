<template>
    <div id="app" class="bg-dark text-light">
        <Navbar />
        <div id="router" class="scrollbar">
            <router-view />
        </div>

        <my-notify-message :message="message" class="notify-bg bg-primary text-white p-2" position="bottom-left">
            <b-spinner small />
        </my-notify-message>

        <my-notify-message :message="ephemeral" class="notify-bg bg-warning p-2" position="top-right">
            <b-spinner small />
        </my-notify-message>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: { Navbar },
    data() {
        return {
            message: "",
            ephemeral: ""
        }
    },
    created() {
        this.$eventbus.$on("message", message => {
            this.message = message;
        });

        this.$eventbus.$on("ephemeral", ephemeral => {
            this.ephemeral = ephemeral;
        });
    }
}
</script>

<style>
#router {
    height: calc(100vh - var(--navbar-height));
    padding: 10px 20px 0 20px;
    overflow-y: auto;
}
.notify-bg {
    opacity: 90%;
    box-shadow: 0 0 20px black;
}
</style>
