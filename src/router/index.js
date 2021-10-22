import { createRouter,createWebHistory } from 'vue-router'
import Signup from '../views/sign_up.vue'
import Signin from '../views/sign_in.vue'
import Home from '../views/home.vue'


const routes = [
    {
        name : "home",
        component :Home,
        path : "/"
    },
    {
        name : "signup",
        component : Signup,
        path : "/signup"
    },
    {
        name:"signin",
        component:Signin,
        path:"/signin"
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})


export default router