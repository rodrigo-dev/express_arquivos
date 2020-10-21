const express = require('express')
const route = express.Router();
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPOST)
route.get ('/contato', contatoController.paginaInicial)

module.exports = route;