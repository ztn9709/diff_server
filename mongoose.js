const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1/diff')

const materialSchema = new Schema({
  formula: {
    type: String,
    required: true
  },
  elements: {
    type: Array,
    required: true
  },
  nele: {
    type: Number
  },
  cry_system: {
    type: String,
    required: true
  },
  Cu: {
    type: Object,
    required: true
  }
})
const Material = mongoose.model('XRD', materialSchema)

module.exports = Material
