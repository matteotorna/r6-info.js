const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://r6-api.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
      },
});

module.exports = axiosInstance;