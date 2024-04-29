// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
//   headers: { "content-Type": "application/json" },
// });

// api.interceptors.request.use(
//   function (config) {
//     console.log("request start", config);
//     return config;
//   },
//   function (error) {
//     console.log("request error", error);
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   function (response) {
//     console.log("get response", response);
//     return response;
//   },
//   function (error) {
//     console.log("response error", error);
//     return Promise.reject(error);
//   }
// );

// export default api;
const API_KEY = process.env.REACT_APP_API_KEY;
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
  params: {
    id: "39",
    name: "Premier League",
    season: "2023",
  },
  headers: {
    "X-RapidAPI-Key": `${API_KEY}`,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

console.log(response);
