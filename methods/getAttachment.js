const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken, generateToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getAttachment({ name, style, rarity, availability, bundle, season } = {}) {
  try {

    if (!isValidToken()) {
      await generateToken();
    }

    const { token, callId } = getToken();

    if (!token) {
      throw new Error('Impossible get a valid token');
    }

    const url = buildUrlAndParams('/charms', { name, style, rarity, availability, bundle, season });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Call-ID': callId
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during the getAttachment request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getAttachment;
