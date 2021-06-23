import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Seccion from "../views/Seccion.vue";


Vue.use(VueRouter);


const routes = [{
    path: "/",
    redirect: {
        name: "Home",
    },
},

{
    path: "*",
    redirect: {
        name: "Home",
    },
},
{
    path: "/home",
    name: "Home",
    component: Home,
},
{
    path: "/seccion/:name",
    name: "seccion",
    component: Seccion,
    beforeEnter: (to, from, next) => {
        if (!from.name) {
            next("home");
        } else {
            next();
        }
    },
},
{
    path: "/detail",
    name: "detail",
    component: Detail,
    beforeEnter: (to, from, next) => {
        if (!from.name) {
            next("home");
        } else {
            next();
        }
    },
},

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;