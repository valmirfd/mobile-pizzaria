import axios from 'axios';

const api = axios.create({//https://ieqpsj.com.br/api/login
   baseURL: "https://ieqpsj.com.br/api/"
})

export { api };