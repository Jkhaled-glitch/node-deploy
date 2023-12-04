const express = require('express')
const cors = require('cors');

const app = express()

//Routers Links
const testRoute = require('./routers/test')

//Port
const port = 5000 || 5001 || 5002


app.use(express.json())
app.use(cors());

//Routers
app.use('/test', testRoute);

//static folder in server

//starting server
app.listen(port, async (req, res) => {
    console.log(`server start on port ${port} `)
})

