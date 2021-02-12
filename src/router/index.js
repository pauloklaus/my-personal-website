import Vue from "vue";
import VueRouter from "vue-router";

import Shell from "@/components/Shell";
import Info from "@/components/Info";
import Playground from "@/components/Playground";

Vue.use(VueRouter)

const routes = [
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
        path: "/info",
        name: "info",
        component: Info
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
