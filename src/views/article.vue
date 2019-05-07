<template>
  <el-container class="layout">
    <!-- wenzhang -->
    <el-container>
      <el-header>
        <artHeader :userInfo="userInfo"></artHeader>
      </el-header>
      <el-main>
        <artList :article="article"></artList>
      </el-main>
    </el-container>
    <el-aside width="150px">
      <div class="newBtn">
        <router-link class="pan-btn tiffany-btn" to="/">New</router-link>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import artHeader from '@/components/artHeader'
import artList from '@/components/artList'
export default {
  components: {
    artHeader,
    artList
  },
  data () {
    return {
      userInfo: {
        userlife: '20190101',
        artCount: 50,
        fontCount: 20000
      },
      article: [
        {
          title: '震惊！青春少女穷游杭州',
          gist: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。',
          created: new Date(),
          comments: 2
        },
        {
          title: '震惊！青春少女穷游杭州',
          gist: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。',
          created: new Date(),
          comments: 2
        },
        {
          title: '震惊！青春少女穷游杭州',
          gist: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。',
          created: new Date(),
          comments: 2
        },
        {
          title: '震惊！青春少女穷游杭州',
          gist: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。',
          created: new Date(),
          comments: 2
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
  .layout {
    padding: 60px 40px 25px 55px;
    border: 1px solid #ccc;
  }
  .el-header {
    // background-color: #B3C0D1;
    // height: 140px;
    height: auto !important;
    padding-bottom: 40px;
    clear: both;
  }
  .newBtn {
    text-align: right;
  }
  .el-main {
    padding-bottom: 0px;
    border-bottom: 1px solid #ccc;
  }
</style>
