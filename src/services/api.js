import axios from "axios";

const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});
export const apiLocal = axios.create({baseURL: 'http://localhost:3333/api'});

export default api;