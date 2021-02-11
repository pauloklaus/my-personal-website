<template>
    <div id="navbar">
        <div id="navbar-gradient"></div>
        <div id="navbar-content" class="d-flex align-items-top">
            <div class="flex-fill">pauloklaus.com.br</div>
            <div id="social-links">
                <a href="https://linkedin.com/in/pauloklaus"><b-img src="images/linkedin.png" /></a>
                <a href="https://github.com/pauloklaus"><b-img src="images/github.png" /></a>
                <a href="https://twitter.com/pauloklaus"><b-img src="images/twitter.png" /></a>
                <a href="mailto:contato@pauloklaus.com.br"><b-img src="images/mail.png" /></a>
            </div>
        </div>
        <b-tabs>
            <template #tabs-end>
                <b-nav-item class="ml-3" :active="$route.name == 'shell'" @click="$router.push({ name: 'shell' })">Shell</b-nav-item>
                <b-nav-item :active="$route.name == 'vue-playground'" @click="$router.push({ name: 'vue-playground' })">Vue Playground</b-nav-item>
                <b-nav-item :active="$route.name == 'info'" @click="$router.push({ name: 'info' })">Info</b-nav-item>
            </template>
        </b-tabs>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#navbar {
    font-size: 1.3em;
    font-weight: bold;
    height: var(--navbar-height);
    overflow: hidden;
}
#navbar-gradient {
    height: 20px;
    background: rgb(159,154,240);
    background: linear-gradient(90deg, rgb(159,154,240) 0%, rgb(120,120,200) 28%, rgb(194,167,81) 100%);
}
#navbar-content {
    padding: 20px;
}
#social-links a {
    padding: 0 5px;
}
#social-links a img {
    height: 20px;
}
</style>
