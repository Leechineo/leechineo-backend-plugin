const axios = require('axios')
const jwt = require('jsonwebtoken')

const Model = (modelName, databasePassword = 'database', schema) => {
  const generateToken = (params = {}) => {
    return jwt.sign(params, process.env.LEECHINEO_AUTH_HASH, {
        expiresIn: 500
    });
  }
  const model = () => axios.create({
    baseURL: process.env.DB_MANAGER_URL ? `${process.env.DB_MANAGER_URL}/${modelName}` : `http://localhost:5000/${modelName}`,
    headers: {
      Authorization: `Bearer ${generateToken({ secretpass: databasePassword })}`
    }
  })
  const create = async (props) => {
    const result = await model().post('/', props)
    return result.data
  }

  const find = async (params = { filters: {}, sort: {}, showId: false }) => {
    const result = await model().get('/', {
      params: {
        filters: params.filters,
        sort: params.sort
      }
    })
    return result.data
  }

  const findById = async (id, params = { select: '' }) => {
    const result = await model().get('/', {
      params: {
        id,
        select: params.select
      }
    })
    return result.data
  }

  const findByIdAndUpdate = async (id, props) => {
    const result = await model().patch('/', props, {
      params: { id }
    })
    return result.data
  }
  const findByIdAndDelete = async (id) => {
    const result = await model().delete('/', {
      params: { id }
    })
    return result.data
  }

  const findOne = async (filters = {}) => {
    const result = await model().get('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }

  const findOneAndUpdate = async (filters, props) => {
    const result = await model().patch('/', props, {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }
  const findOneAndDelete = async (filters) => {
    const result = await model().delete('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }

  const docFormatted = (result) => {
    return schema(result)
  }
  const docsFormatted = (results = []) => {
    return results.map(result => schema(result))
  }

  const paginate = async ({ filter, limit, page, sort, search }) => {
    try {
      const paginator = JSON.stringify({ filter, limit, page, sort, search })
      const result = await model().get('/', {
        params: { paginator }
      })
      return result.data
    } catch (e) {
      throw e
    }
  }

  return {
    create, find, findById, findByIdAndUpdate, findByIdAndDelete, findOne, findOneAndUpdate, findOneAndDelete, docFormatted, docsFormatted, paginate
  }
}
module.exports = Model
