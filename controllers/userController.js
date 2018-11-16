const User = require('../models/User')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((user) => {
                res.send(user)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('game')
            .then((user) => {
                res.send(user)
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
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