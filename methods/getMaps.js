const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken } = require('./tokenManager');
const buildUrlAndParams = require('./util');

async function getMaps(userId, { name, location, releaseDate, playlists, mapReworked } = {}) {
  try {

    let token = await getToken(userId);
    let isValid = await isValidToken(token, userId);

    if (!token || !isValid) {
      console.log('Token expired');
    }

    const url = buildUrlAndParams('/maps', { name, location, releaseDate, playlists, mapReworked });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during the getMaps request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getMaps;