import express from 'express'
import { userProfile } from '../controllers/user.controller'

let router = express.Router()
router.get('/', userProfile)

export default router