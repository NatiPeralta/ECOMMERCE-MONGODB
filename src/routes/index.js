const {Router} = require('express')

const userController = require('../controllers/userController')
const sessionController = require('../controllers/login')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', userController.createUser) //comando post cria usuário
routes.get('/users', userController.getUsers) //comando para listar todos os usuários
routes.get('/users/:user_id', userController.getUserById) //comando para listar um usuário específico

routes.post('/sessions', sessionController.createSession) //comando para fazer um login

routes.post('/products/:user_id', productController.createProduct) //criar produtos para o usuário
routes.get('/:user_id/products', productController.getUserProducts) //para listar os produtos do usuário
routes.patch('/products/:user_id/:product_id', productController.updateProduct)//para atualizar um produto do usuário
routes.delete('/products/:user_id/:product_id', productController.deleteProduct)//para deletar o produto do usuário

routes.get('/products', productController.getProducts)//para listar todos os produtos
routes.get('/products/:product_id', productController.getProductById)//para listar um produto específico

routes.post('/carts/:user_id', cartController.createCart)//para fazer compras, mostrar no cart-carrinho
routes.get('/carts/:user_id', cartController.getUserCarts)//para todos os carts de um usuário
routes.get('/carts/:user_id/:cart_id', cartController.getCart)//para pegar um cart específico(tem o id do usuário, pq os carrinhos de compra são privados dos usuários)

module.exports = routes
