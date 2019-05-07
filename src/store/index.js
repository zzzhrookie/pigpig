import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isSignIn: 0, // 是否登录  0 未登录， 1 登录
    token: '',
    username: '',
    nickname: '',
    avatar: ''
  },
  mutations: {
    // 登录成功，存储信息
    LoginByUsername (content) {
      console.log(content)
      console.log('进来了')
      // localStorage.setItem('token', content.token)
      // localStorage.setItem('username', content.username)
      // localStorage.setItem('nickname', content.nickname)
      // localStorage.setItem('avatar', content.avatar)
    }
  },
  getters
})

export default store
