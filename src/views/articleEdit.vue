<template>
  <div class="container">
    <el-col :span="7" :offset="1">
      <!-- <div class="checkMethod">
        <el-radio-group v-model="editStyle" size="small">
          <el-radio-button label="markdown"></el-radio-button>
          <el-radio-button label="富文本编辑器"></el-radio-button>
        </el-radio-group>
      </div> -->
      <el-form label-position="left" label-width="80px" :model="artEditForm">
        <el-form-item label="标题">
          <el-input clearable v-model="artEditForm.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-checkbox-group
            v-model="artEditForm.category">
           <template v-for="category in categorys">
              <el-checkbox
              :label="category"
              :key="category">
              {{ category }}
            </el-checkbox>
           </template>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="简介">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入简介"
            v-model="artEditForm.brief">
          </el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" size="medium" @click="submit">保存</el-button>
      </div>
    </el-col>
    <el-col :span="14" :offset="1">
       <div class="content">
      <!-- markdown编辑器 -->
      <div class="markdown" v-if="editStyle === 'markdown'">
        <mavon-editor v-model="artEditForm.content" />
      </div>
      <!-- 富文本编辑器 -->
    </div>
    </el-col>
  </div>
</template>

<script>
import { transDate } from '@/tool/auth'
export default {
  name: 'adminEdit',
  data () {
    return {
      categorys: ['心情', '随笔', '吐槽'],
      editStyle: 'markdown',
      heading: '',
      category: '',
      brief: '',
      tinyContent: '',
      artEditForm: {
        title: '',
        category: [],
        brief: '',
        content: ''
      }
    }
  },
  watch: {
    editStyle (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    submit () {
      transDate()
      console.log(this.artEditForm)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  padding-bottom: 50px;
  .checkMethod {
    margin-top: 20px;
    margin-right: 40px;
  }
  .el-form {
    margin-top: 40px;
    // width: 600px;
    text-align: left;
  }
  .btn {
    margin-top: 70px;
    padding-left: 180px;
  }
  .content {
    margin-top: 40px;
    // width: 900px;
    .markdown {
      /deep/ .v-note-wrapper {
        min-height: 600px;
      }
    }
  }
  .editor-content {
    margin-top: 20px;
  }
  .edit-head {
    margin: 20px 0;
  }
}
</style>
