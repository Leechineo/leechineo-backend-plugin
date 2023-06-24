const Model = require("../../_Model")

const findCategory = async (id, categories, databasePassword) => {
  if (!categories?.length) {
    categories = await Model('Category', databasePassword).find()
  }
  for (const category of categories) {
    if (category.id === id) {
      return category
    }
    if (category.subcategories?.length) {
      const categoryFound = await findCategory(id, category.subcategories)
      if (categoryFound?.id === id) {
        return categoryFound
      }
    }
  }
  return null
}

const findCategoryById = (databasePassword) => async function (id, categories) {
  const category = await findCategory(id, categories, databasePassword)
  return category
}

module.exports = findCategoryById
