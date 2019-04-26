<template>
  <div class="layout">
    <el-row :gutter="20" class="header">
      <!-- 左边名称 -->
      <el-col :span="6">
        <div class="zoneTitle">XXXX</div>
      </el-col>
      <!-- 右边导航栏 -->
      <el-col :span="6" :offset="12">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#2d2d2d"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="/article">
              <router-link to="/article">
                <svg-icon icon-class="yuedu" class-name="svgStyle"></svg-icon>
                文章
              </router-link>
            </el-menu-item>
            <el-menu-item index="/category">
              <router-link to="/category">
                <svg-icon icon-class="fenlei" class-name="svgStyle"></svg-icon>
                分类
              </router-link>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <span class="avatar"><img :src="defaultImg" alt=""></span>
              </template>
              <el-menu-item index="/admin/articleEdit">
                <router-link to="/admin/articleEdit" v-if="!isSignIn" class="routerLink">
                  <svg-icon icon-class="xiezuoye1" class-name="svgStyle"></svg-icon>
                  写作
                </router-link>
              </el-menu-item>
              <el-menu-item index="/settings">
                <router-link to="/settings" v-if="!isSignIn" class="routerLink">
                  <svg-icon icon-class="shezhi1" class-name="svgStyle"></svg-icon>
                  设置
                </router-link>
              </el-menu-item>
              <!-- <router-link to="/login" v-if="!isSignIn">Sign In</router-link> -->
            </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import svgIcon from '@/components/svgIcon'
import { checkToken } from '@/tool/public'
import defaultImg from '@/assets/image/龙猫.jpg'
export default {
  mixins: [ checkToken ],
  components: {
    svgIcon
  },
  data () {
    return {
      defaultImg
      // activeIndex: '1'
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      console.log(index, indexPath)
    },
    signIn () {
      this.$router.push('/login')
    }
  }
  // computed: {
  //   // avatar () {
  //   //   return localStorage.getItem('avatar')
  //   // }
  //   // activeIndex () {
  //   //   console.log(this.$store.activeIndex)
  //   //   return this.$store.activeIndex
  //   //}
  // }
}
</script>

<style lang="scss" scoped>
.layout {
  // height: 140px;
  .header {
    margin-right: 0 !important;
    background-color:#2d2d2d;
  }
  .zoneTitle {
    height: 60px;
    font-weight: 700;
    font-size: 19px;
    color: #fff;
    line-height: 60px;
  }
  .signBtn {
    @extend .zoneTitle;
    margin-right: 70px;
  }
  .avatar  {
    width:  40px;
    height: 40px;
    border-radius: 50%;
    img {
      @extend .avatar;
    }
  }
  .el-menu {
    &.el-menu--horizontal {
      border-bottom: none!important;
    }
  }
  .svgStyle {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.45em;
  }
}
</style>
