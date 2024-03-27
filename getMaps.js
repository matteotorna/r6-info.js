const axios = require('axios');

async function getMaps(token, callId, { name, location, releaseDate, playlists, mapReworked } = {}) {
  try {
    let url = 'https://r6-api.vercel.app/api/maps';
    const params = new URLSearchParams();

    if (name) {
      params.append('name', name);
    }
    if (location) {
      params.append('location', location);
    }
    if (releaseDate) {
      params.append('releaseDate', releaseDate);
    }
    if (playlists) {
      params.append('playlists', playlists);
    }
    if (mapReworked) {
      params.append('mapReworked', mapReworked);
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
    console.error('Errore durante la richiesta delle mappe:', error.message);
    if (error.response && error.response.status === 401) {
      throw new Error('Token non valido o scaduto');
    }
    throw error;
  }
}

module.exports = getMaps;
