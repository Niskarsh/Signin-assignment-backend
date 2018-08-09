import express from 'express'
import signin from './signin.routes'
import { authenticate } from '../controllers/cors.controller'

let router = express.Router()
router.use('/', authenticate)
router.use ('/signin', signin)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router