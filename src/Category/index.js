const Model = require('../_Model')
const findCategoryById = require('./findCategoryById')

const Category = (databasePassword) => ({
  ...Model('Category', databasePassword),
  findCategoryById: findCategoryById()
})

module.exports = Category
