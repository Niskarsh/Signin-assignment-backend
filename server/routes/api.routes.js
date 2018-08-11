import express from 'express'
import signin from './signin.routes'
import { accessCORS } from '../controllers/cors.controller'
import { accessCodeFetcher } from '../controllers/linkedinAuth.controller'

let router = express.Router()
router.use('/', accessCORS)
router.use ('/signin', signin)
router.get('/authorize', accessCodeFetcher)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router