const r6Info = require('r6-info.js');

async function main() {

    const userId = 'user123';

    try {

    // await r6Info.tokenManager.generateToken(userId);
    // console.log('Token generated successfully');

    // const token = await r6Info.tokenManager.getToken(userId);   
    // console.log('User token:', token);

    const isValid = await r6Info.tokenManager.isValidToken(token, userId);
    console.log('Token is valid:', isValid);

    const maps = await r6Info.getMaps(userId, { name: 'Bank' });
    console.log('Maps:', maps);

    const service = await r6Info.getServiceSatus(userId);
    console.log('Service:', service);
  
  } catch (error) {
    console.error('Errore durante le richieste:', error.message);
  }
}

main();
