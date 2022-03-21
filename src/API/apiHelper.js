import axios from "axios";

export function getDefaultAxios(){
  const access_token = localStorage.getItem("ACCESS_TOKEN")
    // localStorage.setItem("REFRESH_TOKEN", refresh_token)
   return axios.create({
    // baseURL: 'https://some-domain.com/api/',
    // timeout: 1000,
    headers: {'Authorization': 'Bearer '+ access_token}
  });
}
