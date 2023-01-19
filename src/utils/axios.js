import Axios from "axios";

const axios = Axios.create({
  baseURL: "/",
});

axios.interceptors.request.use(
  (response) => {
    /**
     * you can process config here
     */
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Intercept after received HTTP requests
axios.interceptors.response.use(
  (response) => {
    /**
     * you can process response and error here
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      console.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      console.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
