//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')

//Define all of its fields, like columns of a SQL table
const definition = {
  name: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true
    }
  }
}

//Set any options for the schema
const options = {
  timestamps: true,
  collection: 'university'
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const userSchema = new mongoose.Schema(definition, options)

//export that boye
module.exports = mongoose.model('university', userSchema)
