const getMaps = require('./methods/getMaps');
const getOperators = require('./methods/getOperators');
const getRanks = require('./methods/getRanks');
const getSeasons = require('./methods/getSeasons');
const getServiceSatus = require('./methods/getServiceStatus');
const tokenManager = require('./methods/tokenManager');

const r6Info = {
  getMaps,
  getOperators,
  getRanks,
  getSeasons,
  getServiceSatus,
  tokenManager: {
    generateToken: tokenManager.generateToken,
    isValidToken: tokenManager.isValidToken,
    clearToken: tokenManager.clearToken,
    getToken: tokenManager.getToken,
  },
};

module.exports = r6Info;