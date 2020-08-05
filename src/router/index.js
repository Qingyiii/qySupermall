import Vue from 'vue'
import Vuerouter from 'vue-router'

const Home = () => import("../views/home/home.vue")
const Classify = () => import("../views/classify/classify.vue")
const Cart = () => import("../views/cart/cart.vue")
const Profile = () => import("../views/profile/profile.vue")

Vue.use(Vuerouter)

const routes =  [
    {
        path:'/',
        redirect:'/home'
        
    },
    {
        path:'/home',
        component:Home
        
    },
    {
        path:'/classify',
        conponent:Classify
        
    },
    {
        path:'/cart',
        conponent:Cart
    },
    {
        path:'/profile',
        conponent:Profile
        
    }
] 

const router = new Vuerouter({
    routes,
    mode: 'history'
    
})

export default router