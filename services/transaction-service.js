const HTTP = require('./base-api-service');

function config(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

module.exports = {
  add: async (transaction, token) =>  {
    return HTTP.post('/api/transactions', transaction, config(token));
  },
}