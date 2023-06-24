const Model = require('../_Model')
const findCategoryById = require('./findCategoryById')

const Category = Model('Category')

module.exports = { ...Category, findCategoryById: findCategoryById(Category) }
