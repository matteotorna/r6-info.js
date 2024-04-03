const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken, generateToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getMaps({ name, location, releaseDate, playlists, mapReworked } = {}) {
  try {
    
    if (!isValidToken()) {
      throw new Error('Invalid token');
    }

    const { token, callId } = getToken();

    if (!token) {
      throw new Error('Impossible get a valid token');
    }

    const url = buildUrlAndParams('/maps', { name, location, releaseDate, playlists, mapReworked });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Call-ID': callId
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
