import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./resources/axios";
import "./resources/bootstrap-vue";
import "./resources/vue-lazyload";
import "./resources/psk-inputsearch";
import "./resources/psk-copyandshare";
import "./resources/psk-typewriter";
import "./resources/psk-loadingbar";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
