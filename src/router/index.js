import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import J from '@/components/J'
import SecondPage from '@/components/SecondPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: J
    },
    {
      path: '/second/:age',
      component: SecondPage
    }
  ]
})
