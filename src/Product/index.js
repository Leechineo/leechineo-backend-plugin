const Model = require('../_Model')
const findFullProduct = require('./findFullProduct')
const findFullProducts = require('./findFullProducts')
const findAndFilter = require('./findAndFilter')

const productFomarttedSchema = (product) => ({
  id: product.id,
  name: product.name,
  description: product.description,
  images: product.images,
  specification: product.specification,
  category: product.category,
  brand: product.brand,
  type: product.type,
  stocks: product.stocks,
  private: product.private,
  createdAt: product.createdAt
})

const Product = (databasePassword) => ({
  ...Model('Product', databasePassword, productFomarttedSchema),
  findFullProduct: findFullProduct(databasePassword),
  findFullProducts: findFullProducts(databasePassword),
  findAndFilter: findAndFilter(databasePassword)
})

module.exports = Product
