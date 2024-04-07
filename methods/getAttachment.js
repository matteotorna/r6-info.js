const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getAttachment(userId, { name, style, rarity, availability, bundle, season } = {}) {
  try {

    let token = await getToken(userId);
    let isValid = await isValidToken(token, userId);

    if (!token || !isValid) {
      console.log('Token expired');
    }

    const url = buildUrlAndParams('/charms', { name, style, rarity, availability, bundle, season });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
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
