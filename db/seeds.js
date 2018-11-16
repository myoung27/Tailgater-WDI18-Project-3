const Game = require('../models/Game')
const Item= require('../models/Item')
const Users = require('../models/User')
const mongoose = require('./connection')

const ice = new Item({
    name: "Ice",
    quantity: "2 boxes",
    comments: "I got the ice!"
})

const beer = new Item({
    name: "beer",
    quantity: "2 cases",
    comments: "I got the brews"
})

const bread = new Item({
    name: "Bread",
    quantity:"2 Loaves",
    comments:"Sandwiches!?!?"
})

const meat = new Item({
    name: "Prime Rib",
    quantity:"2",
    comments:"I'm fancy!"
})

const grill = new Item({
    name: "Egg Grill",
    quantity:"1 big-ass grill",
    comments:"Who's hungry?" 
})

const burgers = new Item({
    name: "Burgers",
    quantity:"24 patties",
    comments:"I got the burgers" 
})

const party  = new Game({
    name: "Dexter's Retirement Party",
    description: "Dexter is retiring from being creepy",
    date: "December 19, 2018",
    item: [ice, beer]
})
const funeral = new Game({
    name: "Mannex's Goldfish Funeral",
    description: "Rest in Peace Goldy. You were a great fish",
    date: "May 24, 2019",
    item: [meat]
})

const gameday= new Game({
    name: "SEC Championship Tailgate",
    description: "Let's Watch Alabama smoke Georgia!",
    date: "December 31, 2018",
    item: [grill, burgers]
})
 const Creator = new Users({
     username: "FootballFantic29",
     name: "Myron",
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