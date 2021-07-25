import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../views/Home.vue'),
    },

    {
        path: '/about',
        name: 'AboutPage',
        component: () => import('../views/AboutPage.vue'),
    },

    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Proj.vue'),
    },

    {
        path: '/experiences',
        name: 'Experiences',
        component: () => import('../views/Exp.vue'),
    },

    {
        path: '/404',
        name: '404',
        component: () => import('../components/404.vue'),
    },

    {
        path: '*',
        redirect: '/404'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router