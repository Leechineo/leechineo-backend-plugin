const Model = require('../_Model')

const Setting = (databasePassword) => Model('Setting', databasePassword)

module.exports = Setting
