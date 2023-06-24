const Category = require('../../Category')
const Model = require('../../_Model')
const getSubCategories = require('./getSubcategories')

const findAndFilter = () => async ({
  category, sortby = 'newst_first',
  // price = { min: 0, max: 0 },
  searchQuery = ''
}) => {
  const filters = {}
  if (category) {
    const categories = await Category.find()
    filters.category = {
      $in: getSubCategories(category, categories)
    }
  }
  if (searchQuery) {
    filters.$or = [
      {
        name: {
          $regex: searchQuery,
          $options: 'i'
        }
      },
      {
        brand: {
          $regex: searchQuery,
          $options: 'i'
        }
      },
      {
        description: {
          $regex: searchQuery,
          $options: 'i'
        }
      }
      // TODO Tags
    ]
  }
  const sort = {}
  if (sortby === 'a_to_z') {
    sort.name = 'asc'
  } else if (sortby === 'z_to_a') {
    sort.name = 'desc'
  } else {
    sort.createdAt = 'desc'
  }
  const results = await Model('Product').find({ filters, sort })
  return results
}

module.exports = findAndFilter
