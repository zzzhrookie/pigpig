<template>
  <el-container class="layout">
    <!-- wenzhang -->
    <el-container>
      <el-header>
        <div class="img-box">
          <img src="../assets/image/龙猫.jpg" alt="">
        </div>
        <div class="userInfo">
          <el-row :gutter="20" class="user-life">
            <el-col :span="6">生命值</el-col>
            <el-col :span="6">{{userlife}}</el-col>
          </el-row>
          <el-row :gutter="20" class="art-tip">
            <el-col :span="6">文章:</el-col>
            <el-col :span="6">{{artCount}}</el-col>
            <el-col :span="6">字数:</el-col>
            <el-col :span="6">{{fontCount}}</el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <template v-for="(item, index) in article">
          <div :key="index" class="art-item">
            <header><h3>{{item.head}}</h3></header>
            <div class="art-content">{{item.content}}</div>
          </div>

        </template>
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
export default {
  data () {
    return {
      userlife: '20190101',
      artCount: 50,
      fontCount: 20000,
      article: [
        {
          head: '震惊！青春少女穷游杭州',
          content: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。此前中国还依法拘捕了另外两名加拿大人：康明凯和迈克尔·斯帕弗（Michael Spavor），其均涉嫌从事危害中国国家安全的活动。本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。此前中国还依法拘捕了另外两名加拿大人：康明凯和迈克尔·斯帕弗（Michael Spavor），其均涉嫌从事危害中国国家安全的活动。'
        },
        {
          head: '震惊！青春少女穷游杭州',
          content: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。此前中国还依法拘捕了另外两名加拿大人：康明凯和迈克尔·斯帕弗（Michael Spavor），其均涉嫌从事危害中国国家安全的活动。'
        },
        {
          head: '震惊！青春少女穷游杭州',
          content: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。此前中国还依法拘捕了另外两名加拿大人：康明凯和迈克尔·斯帕弗（Michael Spavor），其均涉嫌从事危害中国国家安全的活动。'
        },
        {
          head: '震惊！青春少女穷游杭州',
          content: '本月早些时候，来自加拿大阿尔伯塔省南部的萨拉·麦卡福因其工作许可证的问题，成为在华被拘的第三名加拿大人。此前中国还依法拘捕了另外两名加拿大人：康明凯和迈克尔·斯帕弗（Michael Spavor），其均涉嫌从事危害中国国家安全的活动。'
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
    .img-box {
      float: left;
      width: 170px;
      height: 140px;
      box-sizing: border-box;
      overflow: hidden;
      border: 1px solid #ccc;
      img {
        width: 100%;
      }
    }
    .userInfo {
      float: left;
      margin-left: 100px;
      width: 300px;
      height: 140px;
      text-align: left;
      .user-life {
        height: 50%;
        padding-top: 47px;
      }
      .art-tip {
        height: 50%;
        padding-top: 47px;
      }
    }
  }
  .newBtn {
    text-align: right;
  }
  .el-main {
    border-bottom: 1px solid #ccc;
  }
  .art-item {
    padding-top: 15px;
    padding-bottom: 50px;
    border-top: 1px solid #ccc;
    .art-content {
      text-indent: 2em;
      text-align: left;
      display: block;
      display: -webkit-box;
      margin: 0 auto;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      &::first-letter {
        font-size:200%;
        // color:#8A2BE2;
        font-weight: 700;
      }
    }
  }
</style>
