const express = require('express')
const route = express.Router();
const homeController = require('./Controllers/homeController')
const contatoController = require('./Controllers/contatoController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPOST)
route.get ('/contato', contatoController.paginaInicial)

module.exports = route;