const Model = require('../_Model')

const formattedStockMethodSchema = (stock) => ({
  id: stock.id,
  name: stock.name,
  country: stock.country,
  shippingMethod: stock.shippingMethod,
  currency: stock.currency,
  createdAt: stock.createdAt
})

const Stock = (databasePassword) => Model('Stock', databasePassword, formattedStockMethodSchema)

module.exports = Stock
