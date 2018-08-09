import express from 'express'
import signin from './signin.routes'

let router = express.Router()

router.use ('/signin', signin)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router