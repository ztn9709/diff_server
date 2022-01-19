const express = require('express')
const formidable = require('formidable')
const Material = require('./mongoose.js')

//创建路由容器
let router = express.Router()

router.post('/api/material', (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (!err) {
      let elements = fields.elements.split(',')
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
    } else {
      res.status(404).send('404 Not Found')
    }
  })
})
router.get('/api/material', async (req, res) => {
  const data = await Material.findOne({ mid: req.query.mid })
  res.send(data)
})

module.exports = router
