const FormData = require('form-data')
const Model = require('../../_Model')

const upload = (msFileManager, databasePassword) => async function (file, path, convertImages) {
  const formData = new FormData()
  formData.append('file', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  })
  const response = await msFileManager.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params: {
      path, convertImages
    }
  })
  const responseData = response.data
  const fileCreated = await Model('File', databasePassword).create({
    id: responseData.id,
    path: responseData.path
  })
  return fileCreated
}

module.exports = upload
