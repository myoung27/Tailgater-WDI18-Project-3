const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    name: String,
    password: String,
    game: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }]
})

module.exports = mongoose.model('User', User)