import Vue from 'vue'
import Router from 'vue-router'

const showGroup = resolve => require(['@/components/showComponent/group-show'], resolve)
const showIndex = resolve => require(['@/components/showComponent/index-show'], resolve)
const showTab = resolve => require(['@/components/showComponent/tab-show'], resolve)
const tabItemShow1 = resolve => require(['@/components/showComponent/tab-item1-show'], resolve)
const tabItemShow2 = resolve => require(['@/components/showComponent/tab-item2-show'], resolve)


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'showIndex',
      component: showIndex,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/showGroup',
      name: 'showGroup',
     // redirect: "/showGroup/tab1",
      component: showGroup,
      meta:{
        keepAlive:true
      },
      children:[{
        path: 'tab1',
        name: 'tab1',
        component: tabItemShow1,
        meta:{
          keepAlive:true,
        },
      },{
        path: 'tab2',
        name: 'tab2',
        component: tabItemShow2,
        meta:{
          keepAlive:true
        },
      }]
    },
    {
      path: '/showTab',
      name: 'showTab',
      component: showTab,
      meta:{
        keepAlive:true
      }
    }
  ]
})
