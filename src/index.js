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
  constructor (databasePassword) {
    this.databasePassword = databasePassword || ''
    this.user = User(this.databasePassword)
    this.product = Product(this.databasePassword)
    this.shippingMethod = ShippingMethod(this.databasePassword)
    this.brand = Brand(this.databasePassword)
    this.category = Category(this.databasePassword)
    this.file = File(this.databasePassword)
    this.stock = Stock(this.databasePassword)
    this.setting = Setting(this.databasePassword)
    this.errors = Errors
    this.plugins = Plugins
  }
  static plugins = Plugins
  static errors = Errors
}

module.exports = Leechineo
