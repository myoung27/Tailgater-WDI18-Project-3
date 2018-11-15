const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Users = new Schema({
    username: String,
    name: String,
    password: String,
        events: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Events'
            }
        ]
    })

module.exports = mongoose.model('Users', Users)