import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import Parent from '../views/Parent'
import HelloWorld from '../components/HelloWorld'

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
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
