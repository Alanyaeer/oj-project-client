import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ()=> import('@/views/Main/mainPage.vue'),
      children: [
        {
          path: '/problemset',
          component: ()=> import('@/views/problemset/problemPage.vue'),
        },
        {
          path: '/learn',
          component: ()=> import('@/views/learn/learnPage.vue'),
          children: [ 
            {
              path: '/learn/newest'

            },
            {
              path: '/learn/hotest'
            },
            {
              path: '/learn/recommend'
            },
           
          ]
        },
        {
          path: '/contest',
          component: ()=> import('@/views/contest/contestPage.vue')
        }
      ]
    },
    {
        path: '/learnPage/:id',
        component: ()=> import('@/views/learn/learnItemPage.vue')
    },
    {
        path: '/problems/:id/editor',
        component: ()=> import('@/views/problems/problemEditorPage.vue')
    },
    {
      path: '/test',
      component: ()=> import('@/views/Test/testPage.vue')
    },
    {
      path: '/manageLogin',
      component: () => import('@/views/Login/manageLoginPage.vue'),
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
      path: '/u/:id',
      component: ()=> import('@/views/person/profile.vue')
    },
    {
      // 这里的id是题目的名字， 但是同时我们也要传递进来这个题目的id
      path: '/problems/:id',
      component: ()=> import('@/views/problems/problems.vue'),
      children: [
        {
          path: '/problems/:id/:pid',
          component: () => import('@/views/problems/child/problemSolution.vue')
        }
      ]
    },
    {
      path: '/profile',
      component: ()=> import('@/views/person/personMain.vue'),
      children: [
        {
          path: '/profile/info',
          component: ()=> import('@/views/person/child/personInfo.vue')
        },
        {
          path: '/profile/progress',
          component: () => import('@/views/person/child/personProgress.vue')
        },
        {
          path: '/profile/favour',
          component: () => import('@/views/person/child/personFavour.vue')
        },
        {
          path: '/profile/notes',
          component: () => import('@/views/person/child/personNote.vue')
        },
        {
          path: '/profile/article',
          component: () => import('@/views/person/child/personSolveArticle.vue')
        },
        {
          path: '/profile/session',
          component: () => import('@/views/person/child/personSession.vue')
        },
        {
          path: '/profile/rewards',
          component: () => import('@/views/person/child/personRewards.vue')
        },
      ]
    },
    {
      path: '/login',
      component: ()=> import('@/views/Login/userLoginPage.vue')
    },
    {
      path: '/',
      redirect: '/problemset'
    }
  ]
})
// router.beforeEach((to, from, next)=>{
//   if(to.matched.length===0){
//     next({path: "/404"})
//   }
// })
export default router
