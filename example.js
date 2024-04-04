const r6Info = require('.');

async function main() {
  try {
    //Resetta e rigenera il token
    //await r6Info.tokenManager.generateToken(); 
    const { token, callId } = await r6Info.tokenManager.getToken();
    console.log(token, callId);
  
    //console.log("Token:", r6Info.tokenManager.getToken(token, callId));

    // // Verifica se il token è valido dopo la rigenerazione
    if (await r6Info.tokenManager.isValidToken()) {
      console.log("Il token è valido.");
    }
    //   // Prova a ottenere i dati
    //   const mapsData = await r6Info.getMaps({ releaseDate: "2019" });
    //   console.log(mapsData);
    // } else {
    //   console.log("Il token non è valido.");
    //   // Qui puoi gestire il caso in cui il token non è valido.
    // }
  } catch (error) {
    console.error('Errore durante le richieste:', error.message);
  }
}

main();
