import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import DashBoard from '@/components/page/DashBoard'
import EditorPage from '@/components/page/EditorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: DashBoard,
        },
        {
          path: '/DashBoard',
          component: DashBoard,
        },
        {
          path: '/EditorPage',
          component: EditorPage,
        }
      ]
    }
  ]
})
