const express = require('express')
const formidable = require('formidable')
const Material = require('./mongoose.js')

//创建路由容器
let router = express.Router()

router.post('/api/material', (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).send('服务器出错:' + err)
      throw err
    }
    let elements = fields.elements.split(',')
    try {
      let data = await Material.find()
      data = data.filter(item => {
        let s = new Set([...item.elements, ...elements])
        if (fields.searchWay === 'exact') {
          return item.elements.length === elements.length && s.size === elements.length
        }
        if (fields.searchWay === 'incl') {
          return s.size === item.elements.length
        }
        return false
      })
      res.send(data)
    } catch (e) {
      res.status(500).send('数据库查询出错:' + e)
      console.log('catch: ', e)
    }
  })
})
router.get('/api/material', async (req, res) => {
  try {
    const data = await Material.findOne({ mid: req.query.mid })
    res.send(data)
  } catch (e) {
    res.status(500).send('数据库查询出错:' + e)
    console.log('catch: ', e)
  }
})

module.exports = router
