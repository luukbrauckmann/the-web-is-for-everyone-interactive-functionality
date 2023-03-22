import dotenv from 'dotenv'
import express from 'express'

import StartPage from './routes/start.js'
import AccountPage from './routes/account.js'

const server = express()
const port = 3000

dotenv.config()

server.set('view engine', 'ejs')
server.set('views', './src/views')

server.use(express.static('static'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', StartPage)
server.get('/account', AccountPage)

server.listen(port, () => console.log(`App is served on port http://localhost:${port}/`))