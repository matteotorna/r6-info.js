const axiosInstance = require('../axiosInstance/axiosInstance');

let tokenData = {
  token: null,
  callId: null
};

async function generateToken() {
  try {
    const response = await axiosInstance.post('/token');
    console.log('Token generated with response:', response.data);
    tokenData = { 
      token: response.data.token, 
      callId: response.data.callId 
    };
    console.log('Token data after generation:', tokenData);
  } catch (error) {
    console.error('Error during the token request:', error.message);
    throw error;
  }
}

async function isValidToken() {
  try {
    const response = await axiosInstance.post('/tokenManagement', { action: 'verify' });
    return response.data.isValid;
  } catch (error) {
    console.error('Error during token validation:', error.message);
    throw error;
  }
}

async function clearToken() {
  try {
    await axiosInstance.post('/tokenManagement', { action: 'delete' });
    tokenData = { token: null, callId: null };
  } catch (error) {
    console.error('Error during token deletion:', error.message);
    throw error;
  }
}

async function getToken() {
  try {
    const response = await axiosInstance.post('/tokenManagement', { action: 'get' });
    if (response.data.token) {
      tokenData = { token: response.data.token, callId: response.data.callId };
      return tokenData;
    }
    throw new Error('Token not found');
  } catch (error) {
    console.error('Error during token retrieval:', error.message);
    throw error;
  }
}

module.exports = {
  generateToken,
  isValidToken,
  clearToken,
  getToken,
};