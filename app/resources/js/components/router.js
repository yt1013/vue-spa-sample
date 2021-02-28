import Router from "vue-router";

import Home from "./Home";
import UserIndex from "./User/Index"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/user',
        name: 'user-index',
        component: UserIndex,
    },
];

export default new Router({
    mode: 'history',
    routes,
});
