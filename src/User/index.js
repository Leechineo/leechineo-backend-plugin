const Model = require('../_Model')

const User = (databasePassword) => Model('User', databasePassword)

module.exports = User
