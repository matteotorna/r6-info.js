const axios = require('axios');

async function getSeasons(token, callId, { name, map, operators, weapons, description, code, startDate } = {}) {
  try {
    let url = 'https://r6-api.vercel.app/api/seasons';
    const params = new URLSearchParams();

    if (name) {
      params.append('name', name);
    }
    if (map) {
      params.append('map', map);
    }
    if (operators) {
      params.append('operators', operators);
    }
    if (weapons) {
      params.append('weapons', weapons);
    }
    if (description) {
      params.append('description', description);
    }
    if (code) {
      params.append('code', code);
    }
    if (startDate) {
      params.append('start_date', startDate);
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
    console.error('Error during the seasons request:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error;
  }
}

module.exports = getSeasons;
