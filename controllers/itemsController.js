const Users = require('../models/Users')
const Events = require('../models/Events')
const Items = require('../models/Items')


const itemsController = {

    index: (req, res) => {
            Items.find({})
                .then((items) => {
                    res.send(items)
                })
    },
    create: (req, res) => {
        const usersId = req.params.usersId
        Users.findById(usersId).then(users => {
            const eventId = req.params.eventsId
            Events.findById(eventId).then(events =>{
                Items.create(req.body).then(newItems => {
                    events.items.push(newItems)
                    events.save()
                    res.send(newItems)
            })
        })
    })
},
    delete: (req, res) => {
        const itemsId = req.params.itemsId
        Items.findByIdAndDelete(itemsId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        Items.findByIdAndUpdate(req.params.itemsId, req.body)
            .then((updatedItems) => {
                updatedItems.save()
                res.send(updatedItems)
            })
    }
}

module.exports = itemsController