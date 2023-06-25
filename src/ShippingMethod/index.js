const Model = require('../_Model')

const formattedShippingMethodSchema = (shippingMethod) => ({
  id: shippingMethod.id,
  name: shippingMethod.name,
  mappings: shippingMethod.mappings,
  defaultMapping: shippingMethod.defaultMapping,
  createdAt: shippingMethod.createdAt
})

const ShippingMethod = (databasePassword) => Model('ShippingMethod', databasePassword)

module.exports = ShippingMethod
