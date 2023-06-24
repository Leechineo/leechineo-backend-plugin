const Model = require('../../_Model')
const findProduct = require('../findFullProduct')

const findProducts = () => async (idList, user) => {
  if (idList) {
    const products = []
    for (const item of idList) {
      const product = await findProduct()(item, user)
      products.push(product)
    }
    return products
  }
  const productsResult = await Model('Product').find()
  const products = []
  for (const item of productsResult) {
    const product = await findProduct()(item.id, user)
    products.push(product)
  }
  return products
}

module.exports = findProducts
