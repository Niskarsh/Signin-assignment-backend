import express from 'express'
import { linkedin } from '../controllers/signin.controller'

let router = express.Router()

router.get ('/', linkedin)

export default router