import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import VideoGame from '../views/VideoGame.vue';
import Contact from '../views/Contact.vue';
 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Video',
    component: VideoGame,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
