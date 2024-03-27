const axios = require('axios');

async function getRanks(token, callId, { name, min_mmr, max_mmr, version } = {}) {
    try {
      let baseUrl = 'https://r6-api.vercel.app/api/ranks';
      if (!['v1', 'v2', 'v3', 'v4', 'v5', 'v6'].includes(version)) {
        throw new Error('Version not valid. Choose between v1, v2, v3, v4, v5, e v6.');
      }
      const params = new URLSearchParams();
      if (version) {
        params.append('version', version);
      }
      if (name) {
        params.append('name', name);
      }
      if (min_mmr) {
        params.append('min_mmr', min_mmr);
      }
      if (max_mmr) {
        params.append('max_mmr', max_mmr);
      }
      const url = `${baseUrl}?${params.toString()}`;
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
      console.error('Errore during ranks request:', error.message);
      if (error.response && error.response.status === 401) {
        throw new Error('Token expired or invalid');
      }
      throw error;
    }
  }

  module.exports = getRanks;