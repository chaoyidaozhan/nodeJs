import catchdollMain from './catchdoll/catchdollMain.mjs'
import express from 'express'
//引入http模块
// var http = require('http')
//引入express模块
// const express = require('expyress')
const app = express()
//设置主机名
var hostName = 'localhost'
//设置端口
var port = '8887'

// var catchdollMain = require('./catchdoll/catchdollMain')

//启动服务
app.listen(port, ()=>{
    console.log(`服务器运行在http://${hostName}:${port}`)
})

catchdollMain.init(app)
// //创建服务
// http.createServer((req, res) => {
//     res.setHeader("ContentType", "json")
//     res.end(JSON.stringify(data))
// }).listen(post, hostName, () => {
//     console.log(`服务器运行在http://${hostName}:${post}`)
// })

