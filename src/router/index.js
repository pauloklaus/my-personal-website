import Vue from "vue";
import VueRouter from "vue-router";

import Shell from "@/components/Shell";
import Info from "@/components/Info";
import Playground from "@/components/Playground";
import Portfolio from "@/components/Portfolio";

Vue.use(VueRouter)

const routes = [
    {
        path: "/info",
        name: "info",
        component: Info,
        meta: {
            title: "info"
        }
    },
    {
        path: "/shell",
        name: "shell",
        component: Shell,
        meta: {
            title: "shell"
        }
    },
    {
        path: "/playground",
        name: "playground",
        component: Playground,
        meta: {
            title: "playground"
        }
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio,
        meta: {
            title: "portfolio"
        }
    },
    {
        path: "*",
        redirect: { name: "shell" }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to) => {
    to.meta.path = to.path.endsWith("/") ? to.path.substr(0, to.path.length - 1) : to.path;

    Vue.nextTick(() => {
        document.title = process.env.VUE_APP_NAME;

        if (to.meta.title)
            document.title += " / " + to.meta.title;
    });
});

export default router;
