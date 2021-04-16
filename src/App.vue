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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap");
:root {
    --navbar-height: 150px;
}

* {
    font-family: "Roboto Mono", courier;
    margin: 0;
    padding: 0;
    border-radius: 0 !important;
    scrollbar-color: var(--light) var(--gray);
}
*::-webkit-scrollbar {
    background: var(--gray);
}
*::-webkit-scrollbar-thumb {
    background: var(--light);
}

input:focus,
button:focus {
    outline: none;
}

#navbar {
    height: var(--navbar-height);
}
#router {
    height: calc(100vh - var(--navbar-height));
    padding: 10px 20px 0 20px;
    overflow-y: auto;
}
</style>
