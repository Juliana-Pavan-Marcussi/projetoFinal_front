import axios from 'axios';

const apiTicher = axios.create({
    baseURL: "http://localhost:8080"
});

export { apiTicher };