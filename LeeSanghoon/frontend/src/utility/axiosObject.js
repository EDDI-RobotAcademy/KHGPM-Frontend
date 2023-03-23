import axios from "axios";

const axiosInst = axios.create({
    baseURL: 'http://localhost:7777',
    timeout: 1000
})

export default axiosInst