const AccountErrors = require('./Account')
const AddressErrors = require('./Address')
const AuthErrors = require('./Auth')
const CartErrors = require('./Cart')
const CategoryErrors = require('./Category')
const CreditCardErrors = require('./CreditCard')
const PaymentErrors = require('./Payment')
const ProductErrors = require('./Product')
const SettingErrors = require('./Setting')
const ShippingMethodErrors = require('./ShippingMethod')
const TicketErrors = require('./Ticket')
const ZipcodeErrors = require('./Zipcode')

const Errors = {
  invalidRequest: {
    error: 'invalid_request',
    message: 'Não foi possível interpretar a requisição.'
  },
  internalServerError: {
    error: 'internal_server_error',
    message: 'Erro interno do servidor'
  },
  product: ProductErrors,
  category: CategoryErrors,
  setting: SettingErrors,
  auth: AuthErrors,
  account: AccountErrors,
  tickets: TicketErrors,
  cart: CartErrors,
  zipcode: ZipcodeErrors,
  shippingMethod: ShippingMethodErrors,
  payment: PaymentErrors,
  creditCard: CreditCardErrors,
  address: AddressErrors
}

module.exports = Errors
