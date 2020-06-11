import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home').default
    },
    {
      path: '/about/about.html',
      name: 'about',
      component: require('@/views/about').default
    },
    {
      path: '/my/my.html',
      name: 'my',
      component: require('@/views/my').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
