const User = require('../models/User')
const Game = require('../models/Game')
const Item = require('../models/Item')

const gameController = {
    index: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).populate('game')
            .then((Users) => {
                res.send(Users.game)
            })
    },
    show: (req, res) => {
        const gameId = req.params.gameId
        Game.findById(gameId)
            .then((game) => {
                res.send(game)
            })
    },
    create: (req, res) => {
        const userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                Game.create(req.body)
                    .then((newGame) => {
                        user.game.push(newGame)
                        user.save()
                        res.send(newGame)
                    })
            })
    },

    delete: (req, res) => {
        const gameId = req.params.gameId
        Game.findByIdAndDelete(gameId)
            .then(() => {
                res.send(200)
            })
    },

    update: (req, res) => {
        const userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                Game.create(req.body)
                    .then((newGame) => {
                        user.game.push(newGame)
                        user.save()
                        res.send(newGame)
                    })
            })
    }
}

module.exports = gameController