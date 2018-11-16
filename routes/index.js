const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const eventsController = require('../controllers/eventsController')
const itemsController = require('../controllers/itemsController')

//routes for reading
router.get('/api/users', usersController.index)
router.get('/api/users/:userId', usersController.show)
router.get('/api/users/:userId/events', eventsController.index)
router.get('/api/users/:userId/events/:eventsId', eventsController.show)
router.get('/api/users/:userId/events/:eventsId/items', itemsController.index)





// //create routes
router.post('/api/users/', usersController.create)
router.post('/api/users/:userId/events', eventsController.create)
router.post('/api/users/:userId/events/:eventId/items', eventsController.create)
// router.post('/users', usersController.create)
// router.post('/users', userController.create )



// //delete routes 

router.delete('/api/users/:userId/events/:eventId', eventsController.delete)
router.delete('/api/users/:userId/events/:eventId/items/:itemsId', itemsController.delete)
// router.delete('/users/:usersId', usersController.delete)
// router.delete('/users/:usersId/houses/:housesId', housesController.delete)

// //update routes 

router.patch('/api/users/:userId/events/:eventsId', eventsController.update)
router.patch('/api/users/:userId/events/:eventsId/items/:itemsId', itemsController.update)

// router.patch('/users/:usersId', usersController.update)
// router.patch('/users/:usersId/houses/:housesId', housesController.update)





module.exports = router







