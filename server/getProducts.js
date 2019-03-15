const products = require('../products.json')

module.exports = {
    priceArray: (request, response) => {
        const {price} = request.query
        if (price) {
        const byPrice = products.filter(product => product.price >= price * 1)
         return response.status(200).send(byPrice)
        }
        console.log(byPrice)
        response.status(200).send(products)
    },
    getId: (request, response) => {
        const {id} = request.params
        let product = products.find((theProduct) => theProduct.id === id * 1)
        if(!product) {
            return response.status(500).send('No such product!')
        }
        response.status(200).send(product)
    }
}
