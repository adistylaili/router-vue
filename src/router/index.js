import { createRouter, createWebHistory } from "vue-router"
import routes from '~pages'

console.log(routes)
  
  const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;