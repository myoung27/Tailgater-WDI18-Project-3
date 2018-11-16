const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Game= new Schema({
    name: String,
    description: String,
    date: String,
    item: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Game', Game)