const Model = require('../_Model')

const Brand = (databasePassword) => ({
  ...Model('Brand', databasePassword),
  formatted (brand) {
    return {
      id: brand.id,
      name: brand.name,
      icon: brand.icon,
      color: brand.color,
      brandWebsite: brand.brandWebsite,
      createdAt: brand.createdAt
    }
  }
})

module.exports = Brand
