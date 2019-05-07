import router from './router'
import store from './store'
import { getToken } from '@/tool/auth'

router.beforeEach((to, from, next) => {
  if (getToken()) {
    store.state.isSignIn = 1
    store.state.username = localStorage.getItem('username')
    if (to.path === '/login') {
      next({ path: '/' })
    }
    next()
  } else {
    store.state.isSignIn = 0
    // next('/')
    next()
  }
})
