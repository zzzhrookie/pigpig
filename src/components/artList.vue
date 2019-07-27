<template>
  <div>
    <template v-for="(item, index) in article">
      <div :key="index"
           class="art-item">
        <!-- <el-header>
          <h3>{{ item.title }}</h3>
        </el-header>
        <div class="art-content">{{ item.content }}</div>
        <el-footer class="footer">
          <div class="date">
            <p>
              {{ item.created }}
              <span
                class="comments"
                v-if="item.comments>0"
              >评论({{ item.comments }})</span>
            </p>
          </div>
        </el-footer> -->
        <router-link :to="'/articleDetail/' + item._id" >
        <p class="card_title">{{ item._id }}</p>
          <p class="card_title">{{ item.title }}</p>
          <p class="gist">{{ item.gist }}</p>
        </router-link>
        <p class="footer">
          {{ item.created | formatTime }}
          <span class="comments">评论({{ item.comments.length }})</span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import { transDate } from '@/tool/auth'
export default {
    props: ['article'],
    // 时间获取器
    filters: {
        formatTime: (value) => transDate(value)
    }
}   
</script>

<style lang="scss" scoped>
.art-item {
  padding: 30px 0 0 20px;
  // padding-bottom: 50px;
  border-top: 1px solid #ccc;
  .card_title {
    font-size: 26px;
    font-weight: 600;
    color: #0085a1;
  }
  .gist {
    text-indent: 2em;
    font-style: italic;
    font-size: 14px;
    color: #a3a3a3;
    margin: 10px 0;
    &:hover {
      color: #0085a1;
    }
  }
  .footer {
    margin-top: 30px;
    /* font-style: italic; */
    font-size: 14px;
    font-family: Lora, 'Times New Roman', serif;
    color: gray;
    margin-bottom: 5px;
  }
  .comments {
    margin-left: 5px;
  }
}
</style>
