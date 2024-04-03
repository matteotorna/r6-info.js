const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken, generateToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getRanks({ name, min_mmr, max_mmr, version } = {}) {
  try {

    if (!['v1', 'v2', 'v3', 'v4', 'v5', 'v6'].includes(version)) {
      throw new Error('Version not valid. Choose between v1, v2, v3, v4, v5, and v6.');
    }

    if (!isValidToken()) {
      await generateToken();
    }

    const { token, callId } = getToken();

    if (!token) {
      throw new Error('Impossible get a valid token');
    }

    const url = buildUrlAndParams('/ranks', { name, min_mmr, max_mmr, version });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Call-ID': callId
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during the getRanks request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getRanks;
