const express = require("express")
const placeRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const places = [
    {city: " Las Vegas ", country: "usa", _id:uuidv4()},
    {city: " Hollywood ", country: "usa", _id:uuidv4()},
    {city: " New York ", country: "usa", _id:uuidv4()},
    {city: " Orlando ", country: "usa", _id:uuidv4()}
]

placeRouter.route("/")
    .get((req,res) => {
        res.send(places)
    })
    .post((req,res) => {
        const newPlace = req.body
        newPlace._id  = uuidv4()
        places.push(newPlace)
        res.send(newPlace)
    })

    module.exports = placeRouter