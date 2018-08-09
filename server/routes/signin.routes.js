import express from 'express'
import { linkedin } from '../controllers/signin.controller'

let router = express.Router()

router.post ('/', linkedin)

export default router