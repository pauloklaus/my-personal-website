import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/vue-lazyload";

import "./plugins/psk-inputsearch";
import "./plugins/psk-copyandshare";
import "./plugins/psk-buttonmenu";
import "./plugins/psk-loadingbar";
import "./plugins/psk-typewriter";

import "./assets/css/base.css";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
