import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/galeria',
    name: 'gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
  },
  {
    path: '/contacto',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/parabrisas',
    name: 'parabrisas',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ParabrisasView.vue')
  },
  {
    path: '/faros',
    name: 'faros',
    component: () => import(/* webpackChunkName: "about" */ '@/views/FarosView.vue')
  },
  {
    path: '/vidrios',
    name: 'vidrios',
    component: () => import(/* webpackChunkName: "about" */ '@/views/VidriosView.vue')
  },
  {
    path: '/repelente',
    name: 'repelente',
    component: () => import(/* webpackChunkName: "about" */ '@/views/RepelenteView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
