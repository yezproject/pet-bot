const HTTP = require('./base-api-service');

module.exports = {
  add: (transaction, token) => {
    return HTTP.post('/transactions', transaction, config(token));
  },

  config: token => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}