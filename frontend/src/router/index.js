import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const isAuthenticated = (to, from, next) => {
  if (store.getters['getToken'] == null)
    next({name:'Login'})
  next()
};

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    beforeEnter: isAuthenticated,
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
    beforeEnter: isAuthenticated,
  },
  {
    path: "/UpdatePost/:id",
    name: "UpdatePost",
    component: () => import("../views/UpdatePost.vue"),
    beforeEnter: isAuthenticated,
  },
  {
    path: "/CreateComment",
    name: "CreateComment",
    component: () => import("../views/CreateComment.vue"),
    beforeEnter: isAuthenticated,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 