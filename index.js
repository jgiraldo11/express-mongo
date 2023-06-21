import express from 'express'
import cors from 'cors'

import { addFurniture, getAllFurnature } from './furniture.js'

// this is to be able to use the .env file
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json()) // to be able to recieve JSON as POST

const PORT = process.env.PORT || 4040

// furnature collection
app.post('/', addFurniture) 
app.get('/furniture', getAllFurnature)


app.get('/',(req, res) => {
    res.status(200).send('myapi')
    //res.json('test')
})

    app.listen(PORT, () => console.log('My api is running 😎'))
