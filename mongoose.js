const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/magnetic')
// const paperSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   },
//   publishYear: {
//     type: Number,
//     required: true
//   },
//   source: {
//     type: String,
//     required: true
//   },
//   class: {
//     type: Number,
//     required: true
//   },
//   abs: {
//     type: String,
//     required: true
//   },
//   createTime: {
//     type: Object,
//     required: true
//   },
//   updateTime: {
//     type: Object,
//     required: true
//   }
// })
// const Paper = mongoose.model('Paper', paperSchema)

// const classSchema = new Schema({
//   id: {
//     type: Number,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   }
// })
// const Class = mongoose.model('Class', classSchema)

module.exports = {}
