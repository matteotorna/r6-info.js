const axiosInstance = require('../axiosInstance/axiosInstance');
const { getToken, isValidToken } = require('./tokenManager');
const buildUrlAndParams = require('./util'); 

async function getOperators(userId, { name, safename, realname, birthplace, age, date_of_birth, season_introduced, health, speed, unit, country_code, roles, side } = {}) {
  try {

    let token = await getToken(userId);
    let isValid = await isValidToken(token, userId);

    if (!token || !isValid) {
      console.log('Token expired');
    }

    const url = buildUrlAndParams('/operators', { name, safename, realname, birthplace, age, date_of_birth, season_introduced, health, speed, unit, country_code, roles, side });

    const response = await axiosInstance.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during the getOperators request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getOperators;
