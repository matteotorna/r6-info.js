const axios = require('axios');

async function getOperators(token, callId, { name, safename, realname, birthplace, age, date_of_birth, season_introduced, health, speed, unit, country_code, roles, side } = {}) {
  try {
    let url = 'https://r6-api.vercel.app/api/operators';
    const params = new URLSearchParams();

    if (name) {
      params.append('name', name);
    }
    if (safename) {
      params.append('safename', safename);
    }
    if (realname) {
      params.append('realname', realname);
    }
    if (birthplace) {
      params.append('birthplace', birthplace);
    }
    if (age) {
      params.append('age', age);
    }
    if (date_of_birth) {
      params.append('date_of_birth', date_of_birth);
    }
    if (season_introduced) {
      params.append('season_introduced', season_introduced);
    }
    if (health) {
      params.append('health', health);
    }
    if (speed) {
      params.append('speed', speed);
    }
    if (unit) {
      params.append('unit', unit);
    }
    if (country_code) {
      params.append('country_code', country_code);
    }
    if (roles) {
      params.append('roles', roles);
    }
    if (side) {
      params.append('side', side);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

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
    console.error('Errore during operators request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getOperators;
