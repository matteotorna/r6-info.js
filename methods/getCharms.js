const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken, generateToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getCharms({ name, collection, rarity, availability, bundle, season } = {}) {
  try {
    if (!isValidToken()) {
      await generateToken();
    }

    const { token, callId } = getToken();

    if (!token) {
      throw new Error('Impossible get a valid token');
    }

    const url = buildUrlAndParams('/charms', { name, collection, rarity, availability, bundle, season });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Call-ID': callId
      }
    });

    return response.data;
  } catch (error) {
    console.error('Errore during the getCharms request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getCharms;
