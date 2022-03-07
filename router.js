const express = require('express')
const formidable = require('formidable')
const Material = require('./mongoose.js')

//创建路由容器
let router = express.Router()
const noninversion = [
  1, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 75, 76, 77, 78, 79, 80, 81, 82, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 143, 144, 145, 146, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 168, 169, 170, 171, 172, 173, 174, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 195, 196, 197, 198, 199, 207, 208, 209, 210, 211, 212, 213, 214,
  215, 216, 217, 218, 219, 220
]

router.post('/api/material', (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).send('服务器出错:' + err)
      throw err
    }
    let elements = fields.elements.split(',')
    try {
      let data = await Material.find({ elements: { $all: elements } })
      data = data.filter(item => noninversion.includes(item.spacegroup.number))
      if (fields.searchWay === 'exact') {
        data = data.filter(item => item.elements.length === elements.length)
      }
      res.send(data)
    } catch (err) {
      res.status(500).send('数据库查询出错:' + err)
      console.log('catch: ', err)
    }
  })
})
router.get('/api/material', async (req, res) => {
  try {
    const data = await Material.findOne({ id: req.query.id })
    res.send(data)
  } catch (err) {
    res.status(500).send('数据库查询出错:' + err)
    console.log('catch: ', err)
  }
})

module.exports = router
