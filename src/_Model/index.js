const axios = require('axios')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Model = (modelName, databasePassword = 'database') => {
  const passwordHash = async () => await bcrypt.hash(databasePassword, 10)
  const generateToken = (params = {}) => {
    return jwt.sign(params, process.env.LEECHINEO_AUTH_HASH, {
        expiresIn: 500
    });
  }
  const model = async () => axios.create({
    baseURL: process.env.DB_MANAGER_URL || `http://localhost:5000/${modelName}`,
    headers: {
      Authorization: `Bearer ${generateToken({ secretpass: await passwordHash() })}`
    }
  })
  const create = async (props) => {
    const result = await (await model()).post('/', props)
    return result.data
  }

  const find = async (params = { filters: {}, sort: {}, showId: false }) => {
    const result = await (await model()).get('/', {
      params: {
        filters: params.filters,
        sort: params.sort
      }
    })
    return result.data
  }

  const findById = async (id, params = { select: '' }) => {
    const result = await (await model()).get('/', {
      params: {
        id,
        select: params.select
      }
    })
    return result.data
  }

  const findByIdAndUpdate = async (id, props) => {
    const result = await (await model()).patch('/', props, {
      params: { id }
    })
    return result.data
  }
  const findByIdAndDelete = async (id) => {
    const result = await (await model()).delete('/', {
      params: { id }
    })
    return result.data
  }

  const findOne = async (filters = {}) => {
    const result = await (await model()).get('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }

  const findOneAndUpdate = async (filters, props) => {
    const result = await (await model()).patch('/', props, {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }
  const findOneAndDelete = async (filters) => {
    const result = await (await model()).delete('/', {
      params: {
        filters: JSON.stringify(filters)
      }
    })
    return result.data
  }

  return {
    create, find, findById, findByIdAndUpdate, findByIdAndDelete, findOne, findOneAndUpdate, findOneAndDelete
  }
}
module.exports = Model
