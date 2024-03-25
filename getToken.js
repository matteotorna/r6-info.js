const axios = require('axios');

async function getToken() {
  try {
    const response = await axios.get('https://r6-api.vercel.app/api/token', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });

    const { token, expiresIn, callDateTime, callId, APIVersion } = response.data;
    return { token, expiresIn, callDateTime, callId, APIVersion };
  } catch (error) {
    console.error('Errore durante la richiesta del token:', error.message);
    throw error;
  }
}

module.exports = getToken;