<template>
    <div id="app" class="bg-dark text-light">
        <Navbar />
        <div id="router" class="scrollbar">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: { Navbar }
}
</script>

<style>
#router {
    height: calc(100vh - var(--navbar-height));
    padding: 10px 20px 0 20px;
    overflow-y: auto;
}
</style>
