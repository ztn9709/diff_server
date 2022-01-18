const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/web_demo')

const materialSchema = new Schema({
  mid: {
    type: String,
    required: true
  },
  formula: {
    type: String,
    required: true
  },
  elements: {
    type: Array,
    required: true
  },
  exact_formula: {
    type: String,
    required: true
  },
  inpurity_elements: {
    type: Array,
    required: true
  },
  structure: {
    type: Object,
    required: true
  },
  results: {
    type: Array,
    required: true
  }
})
const Material = mongoose.model('Material', materialSchema)

module.exports = Material
