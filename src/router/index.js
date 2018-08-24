import Vue from 'vue'
import Router from 'vue-router'
import showGroup from '@/components/showComponent/group-show'
import showIndex from '@/components/showComponent/index-show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showIndex',
      component: showIndex
    },
    {
      path: '/showGroup',
      name: 'showGroup',
      component: showGroup
    }
  ]
})
