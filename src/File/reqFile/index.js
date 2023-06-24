const multer = require('multer')

const multerInstance = multer({ storage: multer.memoryStorage() })

module.exports = {
  single (field) {
    return multerInstance.single(field)
  },
  array (field) {
    return multerInstance.array(field)
  }
}
