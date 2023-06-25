const Model = require('../_Model')
const findCategoryById = require('./findCategoryById')

const formattedCategorySchema = (category) => ({
  id: category.id,
  name: category.name,
  subcategories: category.subcategories,
  createdAt: category.createdAt
})

const Category = (databasePassword) => ({
  ...Model('Category', databasePassword, formattedCategorySchema),
  findCategoryById: findCategoryById(databasePassword)
})

module.exports = Category
