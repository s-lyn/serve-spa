const { INCLUDE_KEYS } = require('../config/env')

const clientConfig = {}

for (const key of INCLUDE_KEYS) {
  if (process.env[key] !== undefined) {
    clientConfig[key] = process.env[key]
  }
}

module.exports = clientConfig
