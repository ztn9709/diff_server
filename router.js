const express = require('express')
const Material = require('./mongoose.js')

//创建路由容器
let router = express.Router()

router.get('/api/material', async (req, res) => {
  try {
    let data = await Material.find({ elements: { $all: req.query.elements } })
    // data = data.filter(item => noninversion.includes(item.spacegroup.number))
    // if (req.query.searchWay === 'exact') {
    //   data = data.filter(item => item.elements.length === req.query.elements.length)
    // }
    res.send(data)
  } catch (err) {
    res.status(500).send('数据库查询出错:' + err)
    console.log('catch: ', err)
  }
})
router.get('/api/material/:id', async (req, res) => {
  try {
    let data = await Material.findOne({ id: req.params.id })
    data = JSON.parse(JSON.stringify(data))
    let src1 = __dirname + '/public/static/data/bandplot/bandplot_nsoc/' + data.mp_id + '.svg'
    let src2 = __dirname + '/public/static/data/bandplot/bandplot_soc/' + data.mp_id + '.svg'
    try {
      data.bandplot_nsoc = await thenfs.readFile(src1, 'utf-8')
    } catch (err) {
      data.bandplot_nsoc = null
    }
    try {
      data.bandplot_soc = await thenfs.readFile(src2, 'utf-8')
    } catch (err) {
      data.bandplot_soc = null
    }
    res.send(data)
  } catch (err) {
    res.status(500).send('数据库查询出错:' + err)
    console.log('catch: ', err)
  }
})

module.exports = router
