const Model = require('../_Model')

const formattedUserSchema = (user) => ({
  selectedAddress: user.selectedAddress,
  name: user.name,
  surname: user.surname,
  birthday: user.birthday,
  cpf: user.cpf,
  email: user.email,
  paymentMethods: user.paymentMethods,
  favorites: user.favorites,
  orders: user.orders,
  createdAt: user.createdAt
})
const User = (databasePassword) => Model('User', databasePassword, formattedUserSchema)

module.exports = User
