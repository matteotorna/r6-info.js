const axios = require('axios');

async function getServiceSatus(token, callId = {}) {
  try {
    let url = 'https://r6-api.vercel.app/api/serviceStatus';

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${token}`,
        'Call-ID': callId
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during to service status request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getServiceSatus;
