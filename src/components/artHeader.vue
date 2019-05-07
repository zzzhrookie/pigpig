<template>
  <div>
    <div class="img-box">
      <img src="../assets/image/龙猫.jpg" alt>
    </div>
    <div class="userInfo">
      <el-row :gutter="20" class="user-life">
        <el-col :span="6">生命值</el-col>
        <el-col :span="6">{{userInfo.userlife}}</el-col>
      </el-row>
      <el-row :gutter="20" class="art-tip">
        <el-col :span="6">文章:</el-col>
        <el-col :span="6">{{userInfo.artCount}}</el-col>
        <el-col :span="6">字数:</el-col>
        <el-col :span="6">{{userInfo.fontCount}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style lang="scss" scoped>
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
</style>
