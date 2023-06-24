const User = require('./User')
const Product = require('./Product')
const ShippingMethod = require('./ShippingMethod')
const Brand = require('./Brand')
const Category = require('./Category')
const File = require('./File')
const Stock = require('./Stock')
const Setting = require('./Settings')

const Errors = require('./_Errors')
const Plugins = require('./Plugins')

class Leechineo {
  static user = User

  static product = Product

  static shippingMethod = ShippingMethod

  static brand = Brand

  static category = Category

  static file = File

  static stock = Stock

  static setting = Setting

  static plugins = Plugins

  static errors = Errors
}

module.exports = Leechineo
