const Events = require('../models/Events')
const Items= require('../models/Items')
const Users = require('../models/Users')
const mongoose = require('./connection')

const ice = new Items({
    name: "Ice",
    quantity: "2 boxes",
    comments: "I got the ice!"
})

const beer = new Items({
    name: "beer",
    quantity: "2 cases",
    comments: "I got the brews"
})

const bread = new Items({
    name: "Bread",
    quantity:"2 Loaves",
    comments:"Sandwiches!?!?"
})

const meat = new Items({
    name: "Prime Rib",
    quantity:"2",
    comments:"I'm fancy!"
})

const grill = new Items({
    name: "Egg Grill",
    quantity:"1 big-ass grill",
    comments:"Who's hungry?" 
})

const burgers = new Items({
    name: "Burgers",
    quantity:"24 patties",
    comments:"I got the burgers" 
})

const party  = new Events({
    name: "Dexter's Retirement Party",
    description: "Dexter is retiring from being creepy",
    date: "December 19, 2018",
    item: [ice, beer]
})
const funeral = new Events({
    name: "Mannex's Goldfish Funeral",
    description: "Rest in Peace Goldy. You were a great fish",
    date: "May 24, 2019",
    item: [meat]
})

const gameday= new Events({
    name: "SEC Championship Tailgate",
    description: "Let's Watch Alabama smoke Georgia!",
    date: "December 31, 2018",
    item: [grill, burgers]
})
 const creator = new Users({
     username: "FootballFantic29",
     name: "Myron",
     password: "1234",
     events: [party, funeral, gameday]
 })
Users.remove({})
    .then(() => Events.remove({})) 
    .then(() => Items.remove({}))
    .then(() => Items.insertMany([ice,beer,bread,meat,grill,burgers]))
    .then(() => Events.insertMany([ party,gameday,funeral]))
    .then(() => creator.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())