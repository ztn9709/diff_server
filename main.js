const express = require('express')
const cors = require('cors')

//引入路由容器
const router = require('./router')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors())

server.use('/public/', express.static('./public/'))
server.use('/node_modules/', express.static('./node_modules/'))

//挂载路由容器到服务中
server.use(router)

server.listen(4001)
