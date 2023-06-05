import express from 'express';
import config from './config';
import comicsRoutes from './routes/comics.routes'
const app = express()
//let port= 5500;
//settings
app.set('port', config.port)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(comicsRoutes)

export default app