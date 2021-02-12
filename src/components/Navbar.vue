<template>
    <div id="navbar">
        <div id="navbar-gradient"></div>
        <div id="navbar-content" class="d-flex align-items-top">
            <div class="flex-fill text-truncate">pauloklaus.com.br</div>
            <div id="social-links" class="text-nowrap">
                <a href="https://linkedin.com/in/pauloklaus"><b-img src="images/social/linkedin.png" /></a>
                <a href="https://github.com/pauloklaus"><b-img src="images/social/github.png" /></a>
                <a href="https://twitter.com/pauloklaus"><b-img src="images/social/twitter.png" /></a>
                <a href="mailto:contato@pauloklaus.com.br"><b-img src="images/social/mail.png" /></a>
            </div>
        </div>
        <div id="navbar-tabs" class="scrollbar text-nowrap px-3">
            <b-button :variant="$route.name == 'info' ? 'light' : ''" @click="$router.push({ name: 'info' })">Info</b-button>
            <b-button :variant="$route.name == 'shell' ? 'light' : ''" @click="$router.push({ name: 'shell' })">Shell</b-button>
            <b-button :variant="$route.name == 'playground' ? 'light' : ''" @click="$router.push({ name: 'playground' })">Playground</b-button>
            <b-button :variant="$route.name == 'portfolio' ? 'light' : ''" @click="$router.push({ name: 'portfolio' })">Portfolio</b-button>
        </div>
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
#navbar-tabs {
    overflow-x: auto;
    border-bottom: 3px solid var(--light);
}
#navbar-tabs button {
    margin: 0 2px;
}
#social-links a {
    padding: 0 5px;
}
#social-links a img {
    height: 20px;
}
</style>
