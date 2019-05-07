<template>
  <div class="container">
    <!-- <el-header class="title">登录</el-header> -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="帐号" required>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item v-if="flag === 'signUp'" label="昵称" required>
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="signIn" v-if="flag === 'signIn'" type="primary" @click="signIn">登录</el-button>
        <el-button class="signUp" v-if="flag === 'signUp'" type="primary" @click="register">注册</el-button>
        <div class="" v-if="flag === 'signIn'">
          <span>New to pigBlog?</span>
        <el-button class="change"  type="text" @click="change">Create an account.</el-button>
        </div>
        <!-- <el-button type="primary" @click="register">注册</el-button>
        <el-button type="primary" @click="logout">退出</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: 'signIn',
      form: {
        username: '',
        password: ''
      }
    }
  },
  beforeCreate () {
    document.querySelector('body').classList.add('loginBg')
  },
  beforeDestroy () {
    document.querySelector('body').classList.remove('loginBg')
  },
  methods: {
    // 切换注册和登录
    change () {
      this.flag = 'signUp'
    },
    // 登录
    signIn () {
      console.log('登陆')
      this.$axios.post('/api/user/login', this.form).then(res => {
        if (res.data.status === 1) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          console.log(res.data)
          // this.$store.commit('LoginByUsername', res.data)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('nickname', res.data.nickname)
          localStorage.setItem('avatar', res.data.avatar)
          this.$router.push('/')
        } else {
          this.$message({
            type: 'warning',
            message: res.data.msg
          })
        }
      })
        .catch(error => {
          this.$message({
            type: 'warning',
            message: error
          })
        })
    },
    // 注册
    register () {
      this.$axios
        .post('/api/user/signUp', this.form)
        .then(res => {
          console.log(res)
          if (res.data.status === 1) {
            this.$message({
              type: 'success',
              message: '注册成功'
            })
            this.flag = 'signIn'
          } else {
            this.$message({
              type: 'warning',
              message: '注册失败'
            })
          }
        })
        .catch(error => {
          this.$message({
            type: 'warning',
            message: error
          })
          console.log(error)
        })
    },
    // 退出
    logout () {
      let data = {
        token: localStorage.getItem('token')
      }
      this.$axios
        .post('/api/user/logout', data)
        .then(res => {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
          localStorage.removeItem('token')
        })
        .catch(error => {
          this.$message({
            type: 'warning',
            message: error
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  margin: auto;
  padding-top: 240px;
}
.el-form {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 60px;
  padding-right: 66px;
  background: #fff;
  .signIn, .signUp {
    width: 100%;
  }
}
</style>
