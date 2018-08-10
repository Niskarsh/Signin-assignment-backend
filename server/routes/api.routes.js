import express from 'express'
import signin from './signin.routes'
import { authentication } from '../controllers/cors.controller'
import { authCodefetcher, accessCodefetcher } from '../controllers/linkedinAuth.controller'

let router = express.Router()
router.use('/', authentication)
router.use ('/signin', signin)
router.get('/authenticate', accessCodefetcher)
router.get('/authorize', authCodefetcher)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router