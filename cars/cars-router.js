const express = require('express')
const knex = require('knex')
const db = require('../data/config')

const router = express.Router()

// GET CARS
router.get('/', async (req, res, next) => {
    try {
        res.json(await db('cars'))
    } catch (err) {
        next(err)
    }
})

// GET CAR BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db('cars').where({id}).first()
        res.json(car)
    } catch(err) {
        next(err)
    }
})

// ADD CAR
router.post('/', async (req, res, next) => {
    try {
        const [ id ] = await db('cars').insert(req.body)
        const newCar = await db('cars').where({ id }).first()
        res.status(201).json(newCar)
    } catch (err) {
        next(err)
    }
})

// STRETCH API PROBLEMS

// UPDATE CAR
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db('cars').where({ id }).update(req.body)
        res.status(200).json(car)
    } catch (err) {
        next(err)
    }
})

// DELETE CAR
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db("cars").where({ id }).del()
        res.status(200).json({
            message: "Car was deleted"
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router 