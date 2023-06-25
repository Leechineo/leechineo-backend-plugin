const Model = require('../_Model')

const User = (databasePassword) => ({
  ...Model('User', databasePassword),
  formatted (user) {
    return {
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
    }
  }
})

module.exports = User
