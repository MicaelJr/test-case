const express = require('express')
const getRouter = require('./get')

const app = express();
app.use(express.json())

app.use('/', getRouter);

app.listen(3000, () => {
    console.log('servidor iniciado')
})