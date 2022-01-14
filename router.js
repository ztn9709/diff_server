const express = require('express')
const fs = require('fs')

//创建路由容器
let router = express.Router()

// router.get('/api/classes', async function (req, res) {
//   const classes_data = await Class.find()
//   res.send(classes_data)
// })

// router.get('/api/paper', async function (req, res) {
//   const papers_data = await Paper.find()
//   res.send(papers_data)
// })
// router.post('/api/paper', async function (req, res) {
//   await new Paper(req.body).save()
// })
// router.delete('/api/paper/:id', async function (req, res) {
//   await Paper.deleteOne({ _id: req.params.id })
//   res.status(200).send('ok')
// })
// router.put('/api/paper/:id', async function (req, res) {
//   await Paper.replaceOne({ _id: req.params.id }, req.body)
//   res.status(200).send('ok')
// })

module.exports = router
