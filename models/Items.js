const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Items = new Schema({
    name: String,
    quantity: String,
    comments: String
    })

module.exports = mongoose.model('Items', Items)