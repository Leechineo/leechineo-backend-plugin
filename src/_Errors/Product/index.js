const ProductErrors = {
  notFound: {
    error: 'product_not_found',
    message: 'O produto não foi encontrado'
  },
  productIdRequired: {
    error: 'product_id_required',
    message: 'O ID do produto não foi informado.'
  },
  variant: {
    notFound: {
      error: 'product_variant_not_found',
      message: 'A variante selecionada não foi encontrada.'
    },
    insuficientStock: {
      error: 'product_variant_stock_insuficient',
      message: 'Não há estoque suficiente para a quantidade desejada.'
    }
  },
  shipping: {
    notFound: {
      error: 'product_shipping_not_found',
      message: 'O método de envio selecionado não existe ou não está mais disponível.'
    }
  }
}

module.exports = ProductErrors
