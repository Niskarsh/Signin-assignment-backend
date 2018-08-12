import express from 'express'
import signin from './signin.routes'
import { accessCORS } from '../controllers/cors.controller'
import { accessCodeFetcher } from '../controllers/linkedinAuth.controller'
import  { userRoutes } from './user.routes'

let router = express.Router()
router.use('/', accessCORS)
router.get('/authorize', accessCodeFetcher)
router.use('/userProfile', userRoutes)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router