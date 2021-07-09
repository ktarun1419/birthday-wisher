import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import register from "../views/register";
import loginhome from "../views/loginhome.vue";
import firebase from "firebase";
import 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/register',
    name:'register',
    component:register
  },
  {path:'/loginhome',
  name:'loginhome',
  component:loginhome,
  meta:{requiresAuth:true}
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated=firebase.auth().currentUser;
  if(requiresAuth &&  !isAuthenticated){
    next("/login");}
    else{
      next();
    }
  
})

export default router
