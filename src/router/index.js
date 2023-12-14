import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/manageLogin',
      component: () => import('@/views/Login/manageLoginPage.vue'),
    },
    {
      path: '/problemset',
      component: ()=> import('@/views/Main/main.vue'),
    },
    {
      path: '/404',
      component: ()=>import('@/views/404/404.vue')
    },
    {
      path: '/backend',
      component: ()=> import('@/views/backend/backendMain.vue')
    },
    {
      path: '/',
      redirect: '/manageLogin'
    }
  ]
})
// router.beforeEach((to, from, next)=>{
//   if(to.matched.length===0){
//     next({path: "/404"})
//   }
// })
export default router
