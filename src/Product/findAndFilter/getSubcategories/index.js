const findCategoryById = require('../../../Category/findCategoryById')

const extractSubcategoriesId = (category, currentIds = []) => {
  if (!category) {
    return
  }
  if (!currentIds.includes(category?.id)) {
    currentIds.push(category.id)
  }
  if (category.subcategories?.length) {
    for (const subcategory of category.subcategories) {
      if (!currentIds.includes(subcategory.id)) {
        currentIds.push(subcategory.id)
      }
      if (subcategory.subcategories?.length) {
        currentIds = [...extractSubcategoriesId(subcategory, currentIds)]
      }
    }
  }
  return currentIds
}

const getSubCategories = (categoryId, categories) => {
  const subcategoriesid = extractSubcategoriesId(findCategoryById()(categoryId, categories))
  return subcategoriesid
}

module.exports = getSubCategories
