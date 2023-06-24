const ShippingMethod = require('../../ShippingMethod')
const Brand = require('../../Brand')
const Model = require('../../_Model')

async function generateVariantOptions (product) {
  switch (product.variants.type) {
  case 'unique':
    const shippingMethod = await ShippingMethod.findById(product.variants.option.shippingMethod)
    return {
      name: product.variants.option.name,
      stock: product.variants.option.stock,
      shippingMethod: {
        name: shippingMethod.name,
        mappings: shippingMethod.mappings,
        defaultMapping: shippingMethod.defaultMapping
      },
      discount: product.variants.option.discount,
      price: product.variants.option.price,
      image: product.variants.option.image
    }
  case 'simple':
    const simpleOptions = []
    for (const option of product.variants.options) {
      const shippingMethod = await ShippingMethod.findById(option.shippingMethod)
      simpleOptions.push({
        stock: option.stock,
        discout: option.discount,
        price: option.price,
        shippingMethod: {
          name: shippingMethod.name,
          mappings: shippingMethod.mappings,
          defaultMapping: shippingMethod.defaultMapping
        },
        name: option.name,
        image: option.image
      })
    }
    return simpleOptions
  default:
    const compoundOptions = []
    for (const option of product.variants.options) {
      const shippingMethod = await ShippingMethod.findById(option.shippingMethod)
      compoundOptions.push({
        stock: option.stock,
        discount: option.discount,
        price: option.price,
        shippingMethod: {
          name: shippingMethod.name,
          mappings: shippingMethod.mappings,
          defaultMapping: shippingMethod.defaultMapping
        },
        names: option.names,
        image: option.image
      })
    }
    return compoundOptions
  }
}

const findProduct = () => async (id, user) => {
  const product = await Model('Product').findOne({ id })
  if (!product) {
    return null
  }
  const _brand = await Brand.findById(product.brand)
  const brand = _brand ? {
    name: _brand.name,
    color: _brand.color,
    url: _brand.url
  } : undefined
  const options = await generateVariantOptions(product)
  const variants = product.variants.type === 'unique' ? {
    title: product.variants.title,
    type: product.variants.type,
    option: options
  }
    : product.variants.type === 'simple' ? {
      title: product.variants.title,
      type: product.variants.type,
      options
    }
      : {
        title: product.variants.title,
        type: product.variants.type,
        attributes: product.variants.attributes,
        options
      }
  return {
    id: product.id,
    name: product.name,
    specifications: product.specifications,
    category: product.category,
    subCategory: product.subCategory,
    subSubCategory: product.subSubCategory,
    brand,
    type: product.type,
    description: product.description,
    images: product.images,
    favorite: user?.favorites?.includes(product?.id) || false,
    variants // TODO Converter preços
  }
}

module.exports = findProduct
