import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000'
})

export default api;