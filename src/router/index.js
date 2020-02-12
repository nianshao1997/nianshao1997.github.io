import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Dishes from '../components/Dishes'
import Order from '../components/Order'
import Manage from '../components/Manage'
import About from '../components/about/About'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/dishes',
        component: Dishes
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/manage',
        component: Manage
    },
    {
        path: '/about',
        component: About
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    //linkActiveClass:'active'//在Nav中写个active，active是class哦
})
router.push('/')
export default router