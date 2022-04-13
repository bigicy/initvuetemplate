import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(["@/components/home"], resolve),
    },
    {
      path: '/upload',
      name: 'upload',
      component: (resolve) => require(["@/components/upload"], resolve),
    },
  ]
})
