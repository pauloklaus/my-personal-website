import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./resources/axios";
import "./resources/bootstrap-vue";
import "./resources/psk-inputsearch";
import "./resources/psk-copyandshare";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
