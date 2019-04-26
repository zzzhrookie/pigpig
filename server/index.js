const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const api = require('./api')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(api)
app.use('/static/', express.static(path.join(__dirname, '../src/assets')))
// 访问静态资源文件，这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../rightWay/dist')))

//监听8088端口
app.listen(8088, function() {
  console.log('sucess listen........')
})