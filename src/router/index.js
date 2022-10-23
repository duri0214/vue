import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import Parent from '../views/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
