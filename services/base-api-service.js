const axios = require("axios");
const jsesc = require("jsesc");

const ACCEPTED_RESPONSE_STATUS = [409, 400];

const HTTP = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.headers.getContentType === "application/json") {
        response.data = JSON.parse(jsesc(response.data, {json: true}));
      }
      return response;
    },
    (error) => {
      console.log("error", error);
      if (error?.response?.status === 401) {
        // handle 401 error
      }
      if (error?.response?.status === 403) {
        //TODO: handle 403 error
      }
      if (error?.response?.status === 500) {
        //TODO: handle 403 error
      }
      if (ACCEPTED_RESPONSE_STATUS.includes(error?.response?.status)) {
        return error.response;
      }
    },
  );
  return instance;
};

module.exports = HTTP();
