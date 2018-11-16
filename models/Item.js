const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    quantity: String,
    comments: String
})

module.exports = mongoose.model('Item', Item)