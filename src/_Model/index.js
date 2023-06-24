const axios = require('axios')

const model = (name) => axios.create({
  baseURL: process.env.DB_MANAGER_URL || `http://localhost:5000/${name}`
})

const Model = (modelName) => {
  const create = async (props) => {
    const result = await model(modelName).post('/', props)
    return result
  }

  const find = async (params = { filters: {}, sort: {}, showId: false }) => {
    const result = await model(modelName).get('/', {
      params: {
        filters: params.filters,
        sort: params.sort
      }
    })
    return result
  }

  const findById = async (id, params = { select: '' }) => {
    const result = await model(modelName).get('/', {
      params: {
        id,
        select: params.select
      }
    })
    return result
  }

  const findByIdAndUpdate = async (id, props) => {
    const result = await model(modelName).patch('/', props, {
      params: { id }
    })
    return result
  }
  const findByIdAndDelete = async (id) => {
    const result = await model(modelName).delete('/', {
      params: { id }
    })
    return result
  }

  const findOne = async (filters = {}) => {
    const result = await model(modelName).get('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result
  }

  const findOneAndUpdate = async (filters, props) => {
    const result = await model(modelName).patch('/', props, {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result
  }
  const findOneAndDelete = async (filters) => {
    const result = await model(modelName).delete('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result
  }

  return {
    create, find, findById, findByIdAndUpdate, findByIdAndDelete, findOne, findOneAndUpdate, findOneAndDelete
  }
}
module.exports = Model
