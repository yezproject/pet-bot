const createClient = require("redis").createClient;

module.exports = {
  client: null,

  openConnection: async function () {
    const redis = await createClient({
      url: "redis://:password@localhost:6379",
    })
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    console.log("Connected to Redis!");
    this.client = redis;
  },

  ping: async function () {
    return await this.client.ping();
  },

  set: async function (key, value) {
    return await this.client.set(key, value);
  },

  get: async function (key) {
    return await this.client.get(key);
  },

  existed: async function (key) {
    return await this.client.existed(key);
  }
};
