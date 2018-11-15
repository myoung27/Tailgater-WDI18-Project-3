const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Events = new Schema({
    name: String,
    description: String,
    date: String,
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Items'
            }
        ]
    })

module.exports = mongoose.model('Events', Events)