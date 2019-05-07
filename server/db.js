const mongoose = require('mongoose')
const path = require('path')

// 连接mongodb数据库
mongoose.connect('mongodb://root:shijun%40pigpig.com@39.105.213.7/blog?authSource=admin', 
{ useNewUrlParser:true })


//设计用户schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true 
  },
  token: {
    type: String
  },
  role: {
    type: String  // 1 为管理员 2 为普通用户
  },
  avatar: {
    type: String,
    default: '../src/assets/image/龙猫.jpg' // 头像
  },
  created: {
    type: String,
    default: Date.now
  }
})

// 设计文章schema模型
const articleSchema = new mongoose.Schema({
  title: String,
  category: Array, // 分类
  gist: String, // 主旨
  created: {
    type: String,
    // default: Date.now
  },
  content: String, // 内容
  comments: Array // 评论
})


// 发布model
const models = {
  User: mongoose.model('User', userSchema),
  article: mongoose.model('Article', articleSchema)
}

module.exports = models