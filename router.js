const express = require('express')
const thenFs = require('then-fs')
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
        if (fields.searchWay === 'exact') {
          if (item.elements.length === elements.length) {
            return elements.every(ele => {
              return item.elements.includes(ele)
            })
          } else {
            return false
          }
        } else {
          return elements.every(ele => {
            return item.elements.includes(ele)
          })
        }
      })
      res.send(data)
    } else {
      res.status(404).send('404 Not Found')
    }
  })
})
router.get('/api/material', async (req, res) => {
  // if (req.query.mid === 'MAT001') {
  //   const data = await thenFs.readFile('./newData.json', 'utf8')
  //   res.send(data)
  // } else {
  //   res.status(404).send('404 Not Found')
  // }
  const data = await Material.findOne({ mid: req.query.mid })
  res.send(data)
})
// router.get('/api/search', async (req, res) => {
//   const data = JSON.parse(await thenFs.readFile('./CoFeSnS.json', 'utf8'))
//   data[0].transport_data.forEach(item => {
//     item.M_T_data.data = item.M_T_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   data[0].transport_data.forEach(item => {
//     item.Rxx_T_data.data = item.Rxx_T_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   data[0].transport_data.forEach(item => {
//     item.AHC_T_data.data = item.AHC_T_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   data[0].transport_data.forEach(item => {
//     item.AHA_T_data.data = item.AHA_T_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   data[0].transport_data.forEach(item => {
//     item.M_B_data.data = item.M_B_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   data[0].transport_data.forEach(item => {
//     item.Rxy_B_data.data = item.Rxy_B_data.data
//       .trim()
//       .split(' ')
//       .map((val, index, arr) => {
//         if (index % 2 == 0) {
//           return [parseFloat(val), parseFloat(arr[index + 1])]
//         }
//       })
//       .filter(val => val)
//   })
//   fs.writeFile('newData.json', JSON.stringify(data), err => {
//     if (err) {
//       console.log('写入失败')
//     }
//   })
//   res.send('ok')
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
