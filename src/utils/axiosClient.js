import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://blog-server.eba-9zeg5kgm.us-west-2.elasticbeanstalk.com/api/v1',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default axiosClient;
