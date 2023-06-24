const axios = require('axios').default

const download = async (path) => {
  try {
    const baseURL = process.env.MS_FILE_MANAGER_URL || 'http://localhost:5001'
    const file = await axios.get(`${baseURL}/getfile?path=${path}`, {
      responseType: 'arraybuffer'
    })
    const fileData = file.data
    return fileData
  } catch (e) {
    throw e
  }
}

module.exports = download
