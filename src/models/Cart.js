const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    //array de objetos que vai armazenar os produtos
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User'
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    payment: {
        card: {
            number: {
                type: String
            },
            cvc: {
                type: String
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)