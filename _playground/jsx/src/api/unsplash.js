import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9038d0fc23e5c855233422c66a637309ed593678118a9b768cbe7a6ab542247d'
    }
});