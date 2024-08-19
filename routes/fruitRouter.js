import express from 'express'
import { fetchFruitInfo, fetchFruitById, insertFruit, deleteFruit, updateFruit, addToCart} from '../controller/fruitController.js'
import {verifyAToken} from "../middleware/authenticate.js"
import { config } from 'dotenv'
import { addToCartDb } from '../model/fruitsDb.js'
config()
const fruitRouter = express.Router()

fruitRouter.get('/getFruits',fetchFruitInfo)

fruitRouter.post('/cart',verifyAToken,addToCart)

fruitRouter.get('/:id',fetchFruitById)

fruitRouter.post('/insert', insertFruit)

fruitRouter.delete('/:id', deleteFruit)

fruitRouter.patch('/:id', updateFruit)

export {fruitRouter}