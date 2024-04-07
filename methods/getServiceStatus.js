const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken } = require('./tokenManager');

async function getServiceStatus(userId) {
  try {
   
    let token = await getToken(userId);
    let isValid = await isValidToken(token, userId);

    if (!token || !isValid) {
      console.log('Token expired');
    }

    let url = '/serviceStatus';
    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during the service status request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getServiceStatus;
