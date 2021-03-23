// 向外暴漏路由器模块
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    //项目中所有的路由
    routes:routes
})