const axiosInstance = require('../axiosInstance/axiosInstance');
const ms = require('ms');

let tokenData = {
  token: null,
  expiresIn: null,
  callDateTime: null,
  callId: null
};

async function generateToken() {
  try {
    const response = await axiosInstance.get('/token');
    const { token, expiresIn, callDateTime, callId } = response.data;

    tokenData = { 
      token, 
      expiresIn: ms(expiresIn), 
      callDateTime, 
      callId 
    };
  } catch (error) {
    console.error('Error during the token request:', error.message);
    throw error;
  }
}

function isValidToken() {
  if (!tokenData.token || !tokenData.expiresIn || !tokenData.callDateTime) {
    return false;
  }
  const formattedCallDateTime = tokenData.callDateTime.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:$6Z');
  const expirationDateTime = new Date(new Date(formattedCallDateTime).getTime() + tokenData.expiresIn);
  
  return new Date() < expirationDateTime;
}

function clearToken() {
  tokenData = { token: null, expiresIn: null, callDateTime: null, callId: null };
}

function getToken() {
  return {
    token: tokenData.token,
    callId: tokenData.callId,
  };
}

module.exports = {
  generateToken,
  isValidToken,
  clearToken,
  getToken,
};
