const Model = require('../_Model')

const formattedBrandSchema = (brand) => ({
  id: brand.id,
  name: brand.name,
  icon: brand.icon,
  color: brand.color,
  brandWebsite: brand.brandWebsite,
  createdAt: brand.createdAt
})

const Brand = (databasePassword) => Model('Brand', databasePassword, formattedBrandSchema)

module.exports = Brand
