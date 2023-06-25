const CategoryErrors = {
  notFound: {
    error: 'category_not_found',
    message: 'Categoria não encontrada.'
  },
  alreadyExists: {
    error: 'category_already_exists',
    message: 'A categoria já existe.'
  },
  invalidData: {
    error: 'invalid_category_data',
    message: 'Os dados fornecidos são inválidos.'
  }
}

module.exports = CategoryErrors
