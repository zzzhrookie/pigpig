import Vue from 'vue'
import Router from 'vue-router'
import commonLayout from '@/components/commonLayout'
import login from '@/views/login' // 登录页
import article from '@/views/article' // 文章列表页
import settings from '@/views/settings' // 设置页
import category from '@/views/category' // 分类页
import articleEdit from '@/views/articleEdit' // 写文章页

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/article',
      component: commonLayout,
      children: [
        {
          path: '',
          name: 'article',
          component: article
        },
        {
          path: '/category',
          name: 'category',
          component: category
        },
        {
          path: '/settings',
          name: 'settings',
          component: settings
        },
        {
          path: '/admin/articleEdit',
          name: 'articleEdit',
          component: articleEdit
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
