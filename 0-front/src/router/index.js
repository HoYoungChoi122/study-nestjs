import Router from 'vue-router'
import Vue from "vue";


Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: () => import('../components/HelloWorld'),
        },
        {
            path: '/test',
            name: 'login',
            component: () => import('../components/Login'),
        }
    ]

})

export default router