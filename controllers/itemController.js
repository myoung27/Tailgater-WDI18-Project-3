const User = require('../models/User')
const Game = require('../models/Game')
const Item = require('../models/Item')


const itemController = {

    index: (req, res) => {
        const gameId = req.params.gameId;
        Game.findById(gameId).populate("item")
            .then(game => {
                res.send(game.item);
            });
    },

    show: (req, res) => {
        const itemId = req.params.gameId;
        Item.findById(itemId).then(item => {
            res.send(item)
        })
    },

    create: (req, res) => {
        const userId = req.params.userId;
        User.findById(userId).then(user => {
            console.log(user);
            const gameId = req.params.gameId;
            Game.findById(gameId).then(game => {
                Item.create(req.body).then(newItem => {
                    console.log(newItem);
                    game.item.push(newItem);
                    game.save();
                    res.send(newItem);
                })
            })
        })
    },
    delete: (req, res) => {
        const itemId = req.params.itemId
        Item.findByIdAndDelete(itemId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        const itemId = req.params.itemId
        Item.findByIdAndUpdate(itemId, req.body, {new: true})
            .then((updatedItem) => {
                updatedItem.save()
                res.send(updatedItem)
            })
    }
}

module.exports = itemController