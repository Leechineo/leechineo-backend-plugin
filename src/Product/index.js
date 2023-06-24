const Model = require('../_Model')
const findFullProduct = require('./findFullProduct')
const findFullProducts = require('./findFullProducts')
const findAndFilter = require('./findAndFilter')

const Product = (databasePassword) => ({
  ...Model('Product', databasePassword),
  findFullProduct: findFullProduct(databasePassword),
  findFullProducts: findFullProducts(databasePassword),
  findAndFilter: findAndFilter(databasePassword)
})

module.exports = Product
