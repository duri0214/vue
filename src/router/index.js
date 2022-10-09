import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import ParentComponent from '../components/ParentComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
