import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      component: ()=> import('@/views/Test/testPage.vue')
    },
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
      component: ()=> import('@/views/backend/backendMain.vue'),
      children: [
        {
          path: '/backend/summary',
          component: ()=>import('@/views/backend/child/manageSummary.vue')
        },
        {
          path: '/backend/question',
          component: ()=>import('@/views/backend/child/manageQuestion.vue')
        },
        {
          path: '/backend/template',
          component: ()=>import('@/views/backend/child/manageTemplate.vue')
        },
        {
          path: '/backend/user',
          component: ()=>import('@/views/backend/child/manageUser.vue')
        },
        {
          path: '/backend/pending',
          component: ()=>import('@/views/backend/child/managePending.vue')
        },
      ]
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
