const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const gameController = require('../controllers/gameController')
const itemController = require('../controllers/itemController')

//routes for reading
router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)
router.get('/api/users/:userId/game', gameController.index)
router.get('/api/users/:userId/game/:gameId', gameController.show)
router.get('/api/users/:userId/game/:gameId/item', itemController.index)
router.get('/api/users/:userId/game/:gameId/item/:itemId', itemController.show)

// //create routes
router.post('/api/users', userController.create)
router.post('/api/users/:userId/game', gameController.create)
router.post('/api/users/:userId/game/:gameId/item', itemController.create)
// router.post('/users', usersController.create)
// router.post('/users', userController.create )

// //delete routes 
router.delete('/api/users/:userId/game/:gameId', gameController.delete)
router.delete('/api/users/:userId/game/:gameId/item/', itemController.delete)
// router.delete('/users/:usersId', usersController.delete)
// router.delete('/users/:usersId/houses/:housesId', housesController.delete)

// //update routes 

router.patch('/api/users/:userId/game/:gameId', gameController.update)
router.patch('/api/users/:userId/game/:gameId/item/', itemController.update)

// router.patch('/users/:usersId', usersController.update)
// router.patch('/users/:usersId/houses/:housesId', housesController.update)





module.exports = router







