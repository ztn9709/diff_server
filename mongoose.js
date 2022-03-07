const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/nonlinear')

const materialSchema = new Schema({
  id: {
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
  spacegroup: {
    type: Object,
    required: true
  },
  soc_dos_gap: {
    type: Number
  },
  nsoc_dos_gap: {
    type: Number
  }
})
const Material = mongoose.model('Material', materialSchema)

module.exports = Material
