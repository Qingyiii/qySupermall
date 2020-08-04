import Vuerouter from 'vue-router'
import Vue from 'vue'

const Home = () => import("views/home/home")
const Classify = () => import("views/classify/classify")
const Cart = () => import("views/cart/cart")
const Profile = () => import("views/profile/profile")

Vue.use(Vuerouter)

const router = new Vuerouter({
    mode: 'history',
    router: [
        {
            path:'/',
            redirect:'/home'
            
        },
        {
            path:'/home',
            conponents:Home
            
        },
        {
            path:'/classify',
            conponents:Classify
            
        },
        {
            path:'/cart',
            conponents:Cart
        },
        {
            path:'/profile',
            conponents:Profile
            
        }
    ]
})

export default router