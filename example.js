const r6Info = require('.');

async function main() {
  try {

    //await r6Info.tokenManager.generateToken(); 
    const { token, callId } = await r6Info.tokenManager.getToken();
    console.log("token :" + token, "callId :" + callId);
  
    if (await r6Info.tokenManager.isValidToken()) {
      console.log("Il token è valido.");
    }
  
  } catch (error) {
    console.error('Errore durante le richieste:', error.message);
  }
}

main();
