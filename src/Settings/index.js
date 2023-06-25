const Model = require('../_Model')

const formattedSettingSchema = (setting) => ({
  id: setting.id,
  name: setting.name,
  value: setting.value,
  createdAt: setting.createdAt
})

const Setting = (databasePassword) => Model('Setting', databasePassword, formattedSettingSchema)

module.exports = Setting
