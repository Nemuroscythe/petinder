import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://petinder-react-alen.herokuapp.com/',
})
export default apiClient;