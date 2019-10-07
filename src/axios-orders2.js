import axios from 'axios';

const instance = axios.create({
        baseURL: 'https://movietime-8a239.firebaseio.com/'
});

export default instance ;