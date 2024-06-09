const redisRepository = require("./redis-repository");
const prefix = "token:duid:";
module.exports = {
  set: async function (userId, token) {
    return await redisRepository.set(prefix + userId, token);
  },
  get: async function (userId) {
    return await redisRepository.get(prefix + userId);
  },
  existed: async function (userId) {
    return await redisRepository.existed(prefix + userId);
  },
};
