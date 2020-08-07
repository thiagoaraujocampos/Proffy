import axios from 'axios';

const api = axios.create({ 
  baseURL: 'http://200.136.205.225:3333'
}); 

export default api;