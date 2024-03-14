import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
  history:createWebHashHistory(),
  // 映射,path -> 组件
  routes:[
    {
      path:"/",
      redirect:"home"
    },
    {
      path:"/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path:"/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path:"/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path:"/profiles",
      component: () => import("@/views/profiles/profiles.vue")
    },
    {
      path:"/city",
      component: () => import("@/views/city/city.vue"),
      // 自定义属性传输
      meta:{
        hideTabBar: true
      }
    },
    {
      path:"/search",
      component: () => import("@/views/search/search.vue"),
      meta:{
        hideTabBar: true
      }
    },
    {
      path:"/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
      meta:{
        hideTabBar: true
      }
    }
  ]
})

export default router