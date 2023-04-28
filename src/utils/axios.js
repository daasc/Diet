import Axios from "axios";
const baseUrl = import.meta.env.base_url;

const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios.interceptors.request.use(
  (response) => {
    const token = localStorage.getItem("token");
    response.headers.Authorization = token ? `Bearer ${token}` : "";

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
    if (
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("token");

      window.location.replace("/login");
    }
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
