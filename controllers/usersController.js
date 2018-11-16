const User = require('../models/Users')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('events')
            .then((user) => {
                res.send(user)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
                res.send(user)
            })
    }
}

module.exports = userController