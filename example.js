const getToken = require('./getToken');
const getRanks = require('./getRanks');
const getMaps = require('./getMaps');
const getSeasons = require('./getSeasons');
const getOperators = require('./getOperators');
const getServiceSatus = require('./getServiceStatus');

async function main() {
  try {
    const { token, callId } = await getToken();
    
    const mapsData = await getMaps(token, callId, { name: 'Clubhouse' });
    console.log(mapsData);
    
    const operatorsData = await getOperators(token, callId, { name: 'Ash' });
    console.log(operatorsData);
    
    const ranksData = await getRanks(token, callId, { version: 'v5', name: 'Gold' });
    console.log(ranksData);
    
    const seasonsData = await getSeasons(token, callId, { name: 'Black Ice' });
    console.log(seasonsData);

    const servicesData = await getServiceSatus(token, callId);
    console.log(servicesData);
  } catch (error) {
    console.error('Errore durante le richieste:', error.message);
  }
}

main();
