const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')


const app = express()

app.get('/api/products', getProducts.priceArray)

app.get('/api/products/:id', getProducts.getId)





const port = 5000
app.listen(port,() =>{
    console.log(`Server listening on port: ${port}`)
})
