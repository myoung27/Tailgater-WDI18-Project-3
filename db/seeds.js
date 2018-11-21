const Game = require('../models/Game')
const Item= require('../models/Item')
const Users = require('../models/User')
const mongoose = require('./connection')

const ice = new Item({
    name: "Ice",
    quantity: "2 bags",
    comments: "I got the ice!- Janice"
})

const beer = new Item({
    name: "beer",
    quantity: "2 cases",
    comments: "I'll bring the beers, I always know the best kinds!- Chandler"
})

const bread = new Item({
    name: "Bread",
    quantity:"2 Loaves",
    comments:"I'm bringing just gread because I work at a bakery- Muffin Man Sr."
})

const meat = new Item({
    name: "Prime Rib",
    quantity:"2",
    comments:"I'm fancy so I'll bring some fancy meat- Sir Ribbington the VI"
})

const grill = new Item({
    name: "Egg Grill",
    quantity:"1 big-ass grill",
    comments:"Who's hungry?-Billy" 
})

const burgers = new Item({
    name: "Burgers",
    quantity:"24 patties",
    comments:"I got the burgers, obviously- Bob" 
})

const party  = new Game({
    name: "New Orleans Saints vs Atlanta Falcons",
    description: "Let see if the Falcons can beat the Saints!!",
    date: "November 25, 2018",
    item: [ice, beer]
})
const funeral = new Game({
    name: "ACC Championship Game",
    description: "Clemson CRUSHES the competition",
    date: "December 1, 2018",
    item: [meat]
})

const gameday= new Game({
    name: "SEC Championship Tailgate",
    description: "Let's Watch Alabama smoke Georgia!",
    date: "December 1, 2018",
    item: [grill, burgers]
})
 const Creator = new Users({
     username: "FootballFantic29",
     name: "Fred",
     password: "1234",
     game: [party, funeral, gameday]
 })
Users.remove({})
    .then(() => Game.remove({})) 
    .then(() => Item.remove({}))
    .then(() => Item.insertMany([ice,beer,bread,meat,grill,burgers]))
    .then(() => Game.insertMany([ party,gameday,funeral]))
    .then(() => Creator.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())