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
        component: Info
    },
    {
        path: "/shell",
        name: "shell",
        component: Shell
    },
    {
        path: "/playground",
        name: "playground",
        component: Playground
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio
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

export default router;
