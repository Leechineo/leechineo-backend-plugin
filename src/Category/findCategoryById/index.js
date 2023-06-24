const findCategory = async (id, categories, categoryModel) => {
  if (!categories?.length) {
    categories = await categoryModel.find()
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

const findCategoryById = (categoryModel) => async function (id, categories) {
  const category = await findCategory(id, categories, categoryModel)
  return category
}

module.exports = findCategoryById
