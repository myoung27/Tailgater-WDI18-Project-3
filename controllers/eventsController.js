const Users = require('../models/Users')
const Events = require('../models/Events')

const eventsController = {
    index: (req, res) => {
            Events.find({})
                .then((events) => {
                    res.send(events)
                })
        },

    show: (req, res) => {
            Events.findById(req.params.eventsId).populate('items')
                .then((events) => {
                    res.send(events)
                })
    },
    create: (req, res) => {
        const usersId = req.params.usersId;
        Users.findById(usersId).then(users => {
            Events.create(req.body).then(newEvents => {
                users.events.push(newEvents);
                users.save();
                res.send(newEvents);
            })
        })
    },

    delete: (req, res) => {
        const eventId = req.params.eventId
        Events.findByIdAndDelete(eventId)
            .then(() => {
                res.send(200)
            })
    },

    update: (req, res) => {
        Events.findByIdAndUpdate(req.params.eventsId, req.body)
            .then((updatedEvent) => {
                updatedEvent.save()
                res.send(updatedEvent)
            })
    }
}

module.exports = eventsController