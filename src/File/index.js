const axios = require('axios')
const Model = require('../_Model')
const upload = require('./upload')
const download = require('./download')
const reqFile = require('./reqFile')

const msFileManager = axios.create({
  baseURL: process.env.MS_FILE_MANAGER_URL || 'http://localhost:5001'
})

const File = (databasePassword) => ({
  ...Model('File', databasePassword),
  upload: upload(msFileManager, databasePassword),
  download,
  reqFile
})

module.exports = File
