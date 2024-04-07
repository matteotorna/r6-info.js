const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getCharms(userId, { name, collection, rarity, availability, bundle, season } = {}) {
  try {

    let token = await getToken(userId);
    let isValid = await isValidToken(token, userId);

    if (!token || !isValid) {
      console.log('Token expired');
    }

    const url = buildUrlAndParams('/charms', { name, collection, rarity, availability, bundle, season });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
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
