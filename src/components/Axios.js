import axios from 'axios'

const baseURL = 'http://3.15.224.161:8000' //Note that this will need to change if you where to local host 179.0.0.1
const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }


})

export default AxiosInstance