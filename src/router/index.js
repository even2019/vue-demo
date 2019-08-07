import Vue from "vue";
import Router from "vue-router";
import MainPage from "./mainPage";
import LineCenter from "./lineCenter";
import Register from "./register"; // 注册
const Layout = () => import("../views/Layout");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Layout,
            // redirect: '/videoCenter',
            children: [
                ...MainPage,
                {
                    path: "/videoCenter",
                    name: "videoCenter",
                    component: () => import("../views/VideoCenter/index")
                },
                ...LineCenter,
                ...Register
            ]
        }
    ]
});
