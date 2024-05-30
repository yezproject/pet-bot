const HTTP = require("./base-service.js");

function config(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

module.exports = {
  add: async (transaction, token) => {
    return HTTP.post("/api/transactions", transaction, config(token));
  },

  latest: async (token, limit) => {
    return HTTP.get("/api/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
      },
    });
  },
};
