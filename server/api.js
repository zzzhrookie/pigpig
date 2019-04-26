const db = require('./db')
const express = require('express')
const jwt = require('jsonwebtoken')


const router = express.Router()


// 注册
router.post('/api/user/signUp', (req, res) => {
  // 1. 查看是否有重名
  db.User.findOne({ username: req.body.username })
    .then((docs) => {
      if (docs) {
        res.send({ status: 0, msg: '用户名已注册', results: docs })
        return
      } 
      // 2. 查看是否有重复昵称
      return req.body.nickname ? db.User.findOne({ nickname: req.body.nickname }) : false
    })
    .then(docs => {
      if (docs) {
        res.send({ status: 0, msg: '昵称已被注册' })
        return
      }
       let newUser = new db.User({
        username: req.body.username,
        password: req.body.password,
        nickname: req.body.nickname,
        role: 2,  // 注册用户均为普通用户
      })
      newUser.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ status: 1, msg: '注册成功' })
        }
      })
    })
    .catch(err => {
      res.send({ status: 0, msg: '注册失败: ' + err })
    })
})

// 登陆
router.post('/api/user/login', (req, res) => {
  db.User.findOne({
    username: req.body.username,
    password: req.body.password
  }).then((docs) => {
    if (docs) {
      let content = { name: req.body.name } // 要生成token的主题信息
      let secretPrivateKey = '123456'  // 加密的key（密钥）
      let token = jwt.sign(content, secretPrivateKey, {
        expiresIn: 60 * 60 * 24  // 1天过期
      })
      docs.token = token
      db.User(docs).save((err) => {
        if (err) {
          res.status(500).send()
          return
        }
      })
      res.send({ status: 1, msg: '登录成功', role: docs.role, token: docs.token, username: docs.username, password: docs.password, nickname: docs.nickname, avatar: docs.avatar })
      // res.send(docs)

    } else {
      // 帐号密码错误
      res.send({ status: 0, msg: '帐号或密码错误，请重新登录' })
      return
    }
  }).catch(err => {
    res.send({ status: 0, msg: '登录失败: ' + err })
  })
  
})

// 退出
router.post('/api/user/logout', (req, res) => {
  db.User.findOne({ token: req.body.token })
    .then((docs) => {
      docs.token = ''
      return db.User(docs).save()
    }).then(() => {
      res.send({ status: 1, msg: '退出成功'})
    }).catch(err => {
      res.send({ status: 0, msg: '退出失败: ' + err })
    })
})

// 检验token
router.post('/api/user/checkUser', (req, res) => {
  db.User.findOne({ token: req.body.token })
    .then(docs => {
      if (docs) {
        res.send({ status: 1, msg: '已登录', result: docs })
      } else {
        res.send({ status: 0, msg: '未登录' })
      }
    })
    .catch(error => {
      res.send({ status: 0, msg: 'error' })
    })
})

// 文章列表页
router.post('/api/articleList', (req, res) => {
  db.Article.find({})
    .then((docs) => {
      res.send({ status: 1, article: docs })
    })
    .catch(error => {
      res.send({ status: 0, msg: '文章获取失败: ' + err })
    })
})



module.exports = router
