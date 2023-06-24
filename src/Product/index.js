const Model = require('../_Model')
const findFullProduct = require('./findFullProduct')
const findFullProducts = require('./findFullProducts')
const findAndFilter = require('./findAndFilter')

const Product = Model('Product')

module.exports = {
  findFullProduct: findFullProduct(), ...Product, findFullProducts: findFullProducts(), findAndFilter: findAndFilter()
}
