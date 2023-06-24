const CreditCardErrors = {
  notFound: {
    error: 'credit_card_not_found',
    message: 'Cartão de crédito não encontrado.'
  },
  invalidValue: {
    error: 'invalid_charge_value',
    message: 'Valor inválido.'
  },
  limitExceeded: {
    error: 'limit_of_credit_card_exceeded',
    message: 'Limite de cartões de crédito excedido.'
  }
}

module.exports = CreditCardErrors
