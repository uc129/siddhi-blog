import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://server.eba-vk3fwwrk.ap-south-1.elasticbeanstalk.com/api/v1',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default axiosClient;
