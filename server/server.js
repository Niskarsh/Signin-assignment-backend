import 'babel-polyfill'
import app from './utils/common'

require('dotenv').config()

const port = process.env.PORT || 3000

app.listen (port, console.log (`Started listening on port ${port}`))

