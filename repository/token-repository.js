const db = require("./base-repository");
const prefix = "token:duid:";
module.exports = {
  set: async function (userId, token) {
    return await db.set(prefix + userId, token);
  },
  get: async function (userId) {
    return await db.get(prefix + userId);
  },
  existed: async function (userId) {
    return await db.existed(prefix + userId);
  },
};
