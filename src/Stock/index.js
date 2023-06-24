const Model = require('../_Model')

const Stock = (databasePassword) => Model('Stock', databasePassword)

module.exports = Stock
