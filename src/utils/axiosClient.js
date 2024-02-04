import axios from 'axios';

const axiosClient = axios.create({
    // baseURL: 'https://server.eba-vk3fwwrk.ap-south-1.elasticbeanstalk.com/api/v1',
    // baseURL: 'http://localhost:4000/api/v1',
    baseURL: 'https://pe5uu66gfe.ap-south-1.awsapprunner.com/api/v1',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default axiosClient;
