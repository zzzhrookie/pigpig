<template>
  <div class="container">
    <div class="content">
      <div class="wrapper">
        <el-header>
          <h1>个人资料</h1>
        </el-header>
        <el-main>
          <div class="avatar user-info">
            <el-col :span="4" class="avatar-label"><span class="label">头像</span></el-col>
            <el-col :span="13" :offset="1">
              <div class="imgBox"><img :src="defaultImg" alt=""></div>
              <div class="imgTip">
                <div class="hit">支持 jpg、png 格式大小 5M 以内的图片</div>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-change="uploadChange">
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
              </div>
            </el-col>
            <!-- <el-col :span="3" class="avatar-opt" :offset="3"><span>修改</span></el-col> -->
          </div>
          <div class="username user-info">
            <el-col :span="4" ><span class="label">用户名</span></el-col>
            <el-col :span="13" :offset="1">
              <el-input v-model="username" placeholder="填写你的用户名"></el-input>
            </el-col>
            <el-col :span="3" :offset="3" class="operation">
              <svg-icon icon-class="xiugai" class-name="svgEdit"></svg-icon>
              <span>修改</span>
            </el-col>
          </div>
          <div class="profile user-info">
            <el-col :span="4" ><span class="label">个人介绍</span></el-col>
            <el-col :span="13" :offset="1">
              <el-input v-model="profile" placeholder="填写职业技能、擅长的事情、喜欢的事情等">
              </el-input>
            </el-col>
            <el-col :span="3" :offset="3" class="operation">
              <svg-icon icon-class="xiugai" class-name="svgEdit"></svg-icon>
              <span>修改</span>
            </el-col>
          </div>
        </el-main>
        <el-footer>
          <el-button type="primary" size="small"  @click="loginOut">退出</el-button>
        </el-footer>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/tool/auth'
import svgIcon from '@/components/svgIcon'
import defaultImg from '@/assets/image/龙猫.jpg'
export default {
  components: {
    svgIcon
  },
  data () {
    return {
      token: getToken(),
      defaultImg,
      username: '小猪小窝',
      profile: '',
      form: {
        token: getToken()
      }
    }
  },
  methods: {
    uploadChange () {},
    loginOut () {
      this.$axios.post('/api/user/logout', this.form).then(res => {
        if (res.data.status === 1) {
          localStorage.clear()
          this.$message({
            type: 'success',
            message: '退出成功'
          })
          this.$router.push('/')
        } else {
          this.$message({
            type: 'warning',
            message: '退出失败: ' + res.msg
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  text-align: left;
  .content {
    margin-top: 40px;
    padding: 40px 30px 50px;
    width: 700px;
    height: 400px;
    background: #fff;
    .wrapper {
      width: 100%;
      height: 100%;
      // background: blue;
    }
  }
  .el-col {
    height: 100%;
  }
  .avatar {
    height: 72px;
    .avatar-label {
      line-height: 72px;
    }
    .avatar-opt {
      @extend .avatar-label;
    }
  }
  .username {
    height: 45px;
    line-height: 45px;
  }
  .profile {
    @extend .username;
    border-bottom: 1px solid #f1f1f1;
  }
  .user-info {
    padding: 12px 0;
    vertical-align: middle;
    border-top: 1px solid #f1f1f1;
  }
  .label {
    font-size: 15px;
    font-weight: 400;
    color: #333;
  }
  .imgBox {
    float: left;
    margin-right: 30px;
    height: 6rem;
    width: 6rem;
    img {
      @extend .imgBox;
    }
  }
  .imgTip {
    float: left;
    .hit {
      margin-bottom: 1.5rem;
      font-size: 1rem;
      color: #909090;
    }
  }
  .el-input {
    /deep/ .el-input__inner {
      border: none;
      font-size: 1.3rem;
      color: #909090;
      outline: none;
    }
  }
  .operation {
    font-size: 1.2rem;
    .svgEdit {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.3rem;
      vertical-align: -0.35rem;
    }
  }
}
</style>
